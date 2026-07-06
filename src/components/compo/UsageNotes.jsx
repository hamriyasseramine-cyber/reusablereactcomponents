export default function UsageNotes({ sections }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div
      style={{
        marginTop: "40px",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {sections.map((section, i) => (
        <div key={i}>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 700,
              margin: 0,
              marginBottom: "12px",
            }}
          >
            {section.heading}
          </h2>
          <p
            style={{
              color: "#b45f4f",
              fontSize: "14.5px",
              lineHeight: "1.7",
              margin: 0,
              maxWidth: "760px",
            }}
          >
            {section.text}
          </p>
        </div>
      ))}
    </div>
  );
}