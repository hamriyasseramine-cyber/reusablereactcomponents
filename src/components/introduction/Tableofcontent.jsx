import toc from "./tocData.js";

export default function TableOfContents({ activeId, activeChildId, onSelectChild }) {
  const activeLabel = toc.find((item) => item.id === activeId);
  const children = activeLabel?.children || [];

  return (
    <div
      style={{
        background: "#0a0a0a",
        padding: "20px 12px",
        width: "260px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#6b7280",
          fontSize: "13px",
          marginBottom: "14px",
          paddingLeft: "16px",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="14" y2="18" />
        </svg>
        <span>On this page</span>
      </div>

      <div style={{ position: "relative" }}>
        {activeLabel && (
          <div
            style={{
              padding: "6px 16px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            {activeLabel.label}
          </div>
        )}

        {children.map((child) => {
          const isActive = child.id === activeChildId;
          return (
            <div
              key={child.id}
              onClick={() => {
                onSelectChild(child.id);
                const el = document.getElementById(child.id);
                if (el) {
                  const offset = 90; // adjust this value to taste
                  const top = el.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              style={{
                position: "relative",
                padding: "6px 16px 6px 32px",
                fontSize: "13px",
                color: isActive ? "#ffffff" : "#9ca3af",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "4px",
                    bottom: "4px",
                    width: "2px",
                    background: "#ffffff",
                    borderRadius: "2px",
                  }}
                />
              )}
              {child.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}