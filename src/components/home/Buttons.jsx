import { useNavigate } from "react-router-dom";

export default function ButtonGroup() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
      `}</style>

      <button
        style={styles.exploreButton}
        onClick={() => navigate("/components")}
      >
        Explore Components
        <span style={{ marginLeft: "4px" }}>→</span>
      </button>

      <button
        style={styles.browseButton}
        onClick={() => navigate("/categories")}
      >
        Browse Categories
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
  },
  exploreButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#ffffff",
    color: "#0a0a0a",
    border: "none",
    borderRadius: "999px",
    padding: "13px 28px",
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    letterSpacing: "0.01em",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 14px rgba(255,255,255,0.15)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },
  browseButton: {
    background: "rgba(255,255,255,0.04)",
    color: "#f2f1ec",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "999px",
    padding: "13px 28px",
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    letterSpacing: "0.01em",
    cursor: "pointer",
    whiteSpace: "nowrap",
    backdropFilter: "blur(6px)",
    transition: "transform 0.15s ease, border-color 0.15s ease",
  },
};