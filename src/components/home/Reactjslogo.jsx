import js from "../../assets/react.png";

export default function JSLogo() {
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
    bottom: "190px",
    left: "-210px",
    right: "auto",
    width: "900px",
    height: "500px",
    pointerEvents: "none",
    background:
      "radial-gradient(circle, rgba(97,218,251,0.18) 0%, rgba(97,218,251,0.06) 40%, transparent 70%)",
  },
  image: {
    width: "100%",
    height: "auto",
    opacity: 0.25,
    transform: "rotate(11deg)",
  },
};
