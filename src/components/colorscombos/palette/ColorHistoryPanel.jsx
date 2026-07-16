export default function ColorHistoryPanel({ history, onClear, onPick }) {
  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "18px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <h3 style={{ color: "#ffffff", fontSize: "14px", margin: 0 }}>Color History</h3>
        <button
          onClick={onClear}
          style={{ background: "none", border: "none", color: "#6b7280", fontSize: "12px", cursor: "pointer" }}
        >
          Clear
        </button>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {history.length === 0 ? (
          <p style={{ color: "#4b5563", fontSize: "12px", margin: 0 }}>
            Colors you pick will show up here.
          </p>
        ) : (
          history.map((color, i) => (
            <button
              key={i}
              onClick={() => onPick(color)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: color,
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`History color ${color}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
