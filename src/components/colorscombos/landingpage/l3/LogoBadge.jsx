export default function LogoBadge({ name, src, size = 48 }) {
  return (
    <div style={styles.wrapper}>
      <img
        src={src}
        alt={name}
        draggable="false"
        style={{ ...styles.img, height: size }}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "auto",
    objectFit: "contain",
    userSelect: "none",
  },
};
