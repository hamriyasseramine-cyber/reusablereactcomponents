import { useState, useMemo } from "react";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import { themes } from "prism-react-renderer";

// Splits a raw component source file into: leading imports, the function
// body (everything between imports and the export line), and the export
// line. This lets us feed just the body to react-live (which doesn't
// support import/export statements) while keeping the rest so we can
// reconstruct a real, copy-pasteable file afterwards.
function splitComponentSource(rawCode) {
  const lines = rawCode.trim().split("\n");

  let i = 0;
  const importLines = [];
  while (i < lines.length && (lines[i].trim().startsWith("import ") || lines[i].trim() === "")) {
    importLines.push(lines[i]);
    i++;
  }

  const rest = lines.slice(i);
  let exportLineIndex = -1;
  for (let j = rest.length - 1; j >= 0; j--) {
    if (rest[j].trim().startsWith("export default")) {
      exportLineIndex = j;
      break;
    }
  }

  let bodyLines = rest;
  let exportLine = "";
  if (exportLineIndex !== -1) {
    exportLine = rest[exportLineIndex];
    bodyLines = rest.slice(0, exportLineIndex);
  }

  const functionNameMatch = rawCode.match(/function\s+([A-Za-z0-9_]+)\s*\(/);
  const functionName = functionNameMatch ? functionNameMatch[1] : "Component";

  return {
    imports: importLines.join("\n").trim(),
    body: bodyLines.join("\n").trim(),
    exportLine: exportLine.trim(),
    functionName,
  };
}

export default function ComponentDetailView({ comp, onClose }) {
  const [copied, setCopied] = useState(false);
  const { name, category, code, liveScope } = comp;

  const parsed = useMemo(() => (code ? splitComponentSource(code) : null), [code]);

  const [liveCode, setLiveCode] = useState(() =>
    parsed ? `${parsed.body}\n\nrender(<${parsed.functionName} />);` : ""
  );

  const handleCopy = async () => {
    if (!parsed) return;
    // Rebuild a real, exportable file: original imports + the (possibly
    // edited) function body + the original export line.
    const editedBody = liveCode.replace(/\n*render\(<[A-Za-z0-9_]+\s*\/>\);?\s*$/, "").trim();
    const fullSource = `${parsed.imports}\n\n${editedBody}\n\n${parsed.exportLine}\n`;
    try {
      await navigator.clipboard.writeText(fullSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0a0a",
          border: "1px solid #232323",
          borderRadius: "16px",
          width: "min(1300px, 96vw)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <style>{`
          .no-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }
        `}</style>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 22px",
            borderBottom: "1px solid #1a1a1a",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <h2 style={{ color: "#ffffff", fontSize: "17px", fontWeight: 700, margin: 0 }}>
              {name}
            </h2>
            <span
              style={{
                color: "#6b7280",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                background: "#161616",
                border: "1px solid #232323",
                borderRadius: "6px",
                padding: "3px 8px",
              }}
            >
              {category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "#141414",
              border: "1px solid #232323",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "14px",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {!parsed ? (
          <div style={{ padding: "40px", color: "#6b7280", fontSize: "13px" }}>
            No source wired up yet for this component.
          </div>
        ) : (
          <LiveProvider code={liveCode} scope={liveScope || {}} noInline>
            <div
              className="no-scrollbar"
              style={{
                flex: 1,
                overflow: "auto",
                padding: "20px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {/* Result panel */}
              <div>
                <div style={{ color: "#6b7280", fontSize: "12px", fontWeight: 600, marginBottom: "10px" }}>
                  RESULT
                </div>
                <div
                  className="no-scrollbar"
                  style={{
                    background: "#000000",
                    border: "1px solid #000000",
                    borderRadius: "10px",
                    padding: "24px",
                    minHeight: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "auto",
                  }}
                >
                  <div
                    className="preview-scope"
                    style={{ width: "100%" }}
                    onClickCapture={(e) => e.preventDefault()}
                  >
                    <style>{`
                      .preview-scope > * {
                        position: relative !important;
                        top: auto !important;
                        left: auto !important;
                        right: auto !important;
                        bottom: auto !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        box-sizing: border-box !important;
                      }
                    `}</style>
                    <LivePreview />
                    <LiveError style={{ color: "#f87171", fontSize: "12px", marginTop: "10px", whiteSpace: "pre-wrap" }} />
                  </div>
                </div>
              </div>

              {/* Code panel — fully editable, live */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 600 }}>
                    SOURCE CODE
                  </span>
                  <button
                    onClick={handleCopy}
                    aria-label="Copy code"
                    style={{
                      background: "#000000",
                      border: "1px solid #000000",
                      borderRadius: "7px",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </button>
                </div>
                <LiveEditor
                  onChange={setLiveCode}
                  theme={themes.vsDark}
                  className="no-scrollbar"
                  style={{
                    background: "#0d0d0d",
                    border: "1px solid #1a1a1a",
                    borderRadius: "10px",
                    padding: "16px",
                    maxHeight: "420px",
                    overflow: "auto",
                    fontSize: "12.5px",
                    lineHeight: "1.6",
                    fontFamily: "'Fira Code', 'Courier New', monospace",
                  }}
                />
              </div>
            </div>
          </LiveProvider>
        )}
      </div>
    </div>
  );
}