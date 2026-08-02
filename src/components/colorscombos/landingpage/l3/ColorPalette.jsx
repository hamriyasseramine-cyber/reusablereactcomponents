export default function ColorPalette({ colors = [], size = 90 }) {
  // how much each circle overlaps the previous one
  const overlap = size * 0.35;

  return (
    <div style={styles.wrapper}>
      <div style={styles.circles}>
        {colors.map((hex, i) => (
          <div
            key={hex + i}
            style={{
              ...styles.circle,
              width: size,
              height: size,
              marginLeft: i === 0 ? 0 : -overlap,
              zIndex: colors.length - i,
              background: `
                radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 45%),
                ${hex}
              `,
              boxShadow: `
                0 6px 14px -4px rgba(0,0,0,0.4),
                inset 0 -2px 4px rgba(0,0,0,0.12)
              `,
            }}
          />
        ))}
      </div>

      <div style={styles.labels}>
        {colors.map((hex, i) => (
          <span key={hex + i} style={styles.label}>
            {hex.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  circles: {
    display: "flex",
    alignItems: "center",
  },
  circle: {
    borderRadius: "50%",
    flexShrink: 0,
  },
  labels: {
    display: "flex",
    gap: "20px",
  },
  label: {
    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "0.05em",
    color: "#9ca3af",
  },
};
