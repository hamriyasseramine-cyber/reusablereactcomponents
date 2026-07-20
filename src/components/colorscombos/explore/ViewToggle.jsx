export default function ViewToggle({ view, onChange }) {
  const options = [
    { key: "grid", label: "Grid" },
    { key: "list", label: "List" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        background: "#111111",
        border: "1px solid #262626",
        borderRadius: "8px",
        padding: "3px",
      }}
    >
      {options.map((opt) => (
        <button
          key={opt.key}
          onClick={() => onChange(opt.key)}
          style={{
            background: view === opt.key ? "#1f1f1f" : "none",
            border: "none",
            color: view === opt.key ? "#ffffff" : "#9ca3af",
            fontSize: "13px",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.15s ease, color 0.15s ease",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
