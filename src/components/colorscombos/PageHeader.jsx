export default function PageHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h1 style={{ color: "#ffffff", fontSize: "28px", margin: 0 }}>{title}</h1>
      {subtitle && (
        <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "6px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
