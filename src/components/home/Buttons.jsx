import { useNavigate } from "react-router-dom";

export default function ButtonGroup() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <button
        style={styles.exploreButton}
        onClick={() => navigate("/components")}
      >
        Explore Components
        <span>→</span>
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
    position: "fixed",
    bottom: "340px",
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "12px",
  },
  exploreButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#fff",
    color: "#000",
    border: "1px solid #323232",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "sans-serif",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  browseButton: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #555",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "sans-serif",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};
