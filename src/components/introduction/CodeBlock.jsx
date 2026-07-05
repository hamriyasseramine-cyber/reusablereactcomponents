import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

export default function CodeBlock({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      style={{
        position: "relative",
        background: "#0d0d0d",
        border: "1px solid #262626",
        borderRadius: "12px",
        margin: "16px 0",
        overflow: "hidden",
      }}
    >
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: "6px",
          padding: "6px",
          cursor: "pointer",
          color: "#9ca3af",
          display: "flex",
          alignItems: "center",
          zIndex: 1,
        }}
        aria-label="Copy code"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "16px",
          background: "transparent",
          fontSize: "13px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
