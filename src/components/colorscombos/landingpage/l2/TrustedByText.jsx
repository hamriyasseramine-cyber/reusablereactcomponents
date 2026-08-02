export default function TrustedByText({
  text = "TRUSTED BY DEVS BUILDING WITH MODERN TOOLS",
}) {
  return (
    <div style={styles.wrapper}>
      <span style={styles.text}>{text}</span>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "108px 19px 8px",
  },
  text: {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#9a9a9a",
  },
};
