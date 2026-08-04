export default function BrandColorsTitle() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.text}>
        colors you trust,
        <br />
        without knowing why
      </h2>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "48px 16px 24px",
    background: "#000000",
  },
  text: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "67.8px",
    fontWeight: 600,
    lineHeight: 1.25,
    color: "#ffffff",
    margin: 0,
    letterSpacing: "-0.01em",
    textAlign: "left",
  },
};