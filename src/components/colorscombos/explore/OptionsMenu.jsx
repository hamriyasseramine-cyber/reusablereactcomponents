const DEFAULT_OPTIONS = [
  { label: "Copy CSS", onClick: () => {} },
  { label: "Copy Tailwind", onClick: () => {} },
  { label: "Download PNG", onClick: () => {} },
  { label: "Share", onClick: () => {} },
  { label: "Report", onClick: () => {} },
];

export default function OptionsMenu({ options = DEFAULT_OPTIONS }) {
  return (
    <div className="options-menu-wrapper" style={{ position: "relative" }}>
      <button
        aria-label="More options"
        style={{
          background: "none",
          border: "none",
          padding: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ color: "#6b7280" }}
        >
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>

      {/* wrapper with padding-top bridges the visual gap so hover never breaks */}
      <div
        className="options-menu-dropdown-wrapper"
        style={{
          position: "absolute",
          top: "100%",
          right: 0,
          paddingTop: "6px",
          zIndex: 10,
        }}
      >
        <div
          className="options-menu-dropdown"
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            minWidth: "160px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            overflow: "hidden",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={opt.onClick}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "10px 14px",
                color: "#e5e7eb",
                fontSize: "13px",
                fontFamily: "system-ui, sans-serif",
                cursor: "pointer",
              }}
              className="options-menu-item"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .options-menu-dropdown {
          opacity: 0;
          transform-origin: top right;
          transform: scaleY(0.85) translateY(-8px);
          transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .options-menu-dropdown-wrapper {
          pointer-events: none;
        }
        .options-menu-wrapper:hover .options-menu-dropdown-wrapper {
          pointer-events: auto;
        }
        .options-menu-wrapper:hover .options-menu-dropdown {
          opacity: 1;
          transform: scaleY(1) translateY(0);
        }
        .options-menu-item:hover {
          background: #262626;
        }
        .options-menu-wrapper button {
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}