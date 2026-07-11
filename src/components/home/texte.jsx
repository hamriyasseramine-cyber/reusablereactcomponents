export default function texte() {
  return (
    <div style={styles.wrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;1,400&display=swap');
      `}</style>

      <p style={styles.quote}>
        When knowledge is shared freely,
        <br />
        <em style={styles.em}>everyone builds better.</em>
      </p>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quote: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: "clamp(26px, 4vw, 42px)",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: "#ffffff",
    textAlign: "center",
    margin: 0,
  },
  em: {
    fontStyle: "italic",
  },
};
