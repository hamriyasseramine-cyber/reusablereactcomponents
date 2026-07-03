import js from "../../assets/js.png";

export default function Jslogo() {
  return (
    <div style={styles.wrapper}>
      <img src={js} alt="description" style={styles.image} />
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    top: "auto",
    bottom: "40px",
    left: "auto",
    right: "-200px",
    width: "900px",
    height: "500px",
    pointerEvents: "none",
    background:
      "radial-gradient(circle, rgba(240,219,79,0.10) 0%, rgba(240,219,79,0.03) 40%, transparent 70%)",
  },
  image: {
    width: "100%",
    height: "auto",
    opacity: 0.25,
    transform: "rotate(-5deg)",
  },
};
