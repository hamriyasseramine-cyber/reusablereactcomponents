import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import AutoFitPreview from "./AutoFitPreview.jsx";
import UsageNotes from "./UsageNotes.jsx";

export default function ComponentPreviewPanel({ comp }) {
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState("preview"); // "preview" | "code"

  if (!comp) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          minHeight: "400px",
          color: "#4b5563",
          fontSize: "14px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Select a component from the right to preview it.
      </div>
    );
  }

  const { name, category, Component, code, usageSections } = comp;

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
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
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <h1 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: 0 }}>{name}</h1>
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

      {/* Window */}
      <div
        style={{
          background: "#0d0d0d",
          border: "1px solid #1a1a1a",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* Window header: tabs + copy */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 12px",
            borderBottom: "1px solid #1a1a1a",
            background: "#0a0a0a",
          }}
        >
          <div style={{ display: "flex", gap: "4px" }}>
            <button
              onClick={() => setView("preview")}
              style={{
                background: view === "preview" ? "#1e1e1e" : "transparent",
                color: view === "preview" ? "#ffffff" : "#6b7280",
                border: "none",
                borderRadius: "7px",
                fontSize: "12.5px",
                fontWeight: 600,
                padding: "6px 14px",
                cursor: "pointer",
              }}
            >
              Preview
            </button>
            <button
              onClick={() => setView("code")}
              style={{
                background: view === "code" ? "#1e1e1e" : "transparent",
                color: view === "code" ? "#ffffff" : "#6b7280",
                border: "none",
                borderRadius: "7px",
                fontSize: "12.5px",
                fontWeight: 600,
                padding: "6px 14px",
                cursor: "pointer",
              }}
            >
              Src
            </button>
          </div>

          {view === "code" && (
            <button
              onClick={handleCopy}
              disabled={!code}
              aria-label="Copy code"
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "7px",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: code ? "pointer" : "not-allowed",
                opacity: code ? 1 : 0.4,
              }}
            >
              {copied ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Window body */}
        <div className="no-scrollbar" style={{ height: "429px", overflow: "auto" }}>
          {view === "preview" ? (
            <div
              style={{
                padding: "28px",
                minHeight: "320px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              {Component ? (
                <AutoFitPreview Component={Component} />
              ) : (
                <span style={{ color: "#6b7280", fontSize: "13px" }}>
                  No live component wired up yet.
                </span>
              )}
            </div>
          ) : code ? (
            <Highlight code={code.trim()} language="jsx" theme={themes.vsDark}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={className}
                  style={{
                    ...style,
                    background: "transparent",
                    padding: "16px",
                    margin: 0,
                    fontSize: "12.5px",
                    lineHeight: "1.6",
                    fontFamily: "'Fira Code', 'Courier New', monospace",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          ) : (
            <pre
              style={{
                padding: "16px",
                margin: 0,
                fontSize: "12.5px",
                color: "#6b7280",
                fontFamily: "'Fira Code', 'Courier New', monospace",
              }}
            >
              {"// Source not wired up yet for this component."}
            </pre>
          )}
        </div>
      </div>

      <UsageNotes sections={usageSections} />
    </div>
  );
}