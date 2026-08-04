// logos live in public/logos/logos/ — referenced by plain path, no import needed
const ITEMS = [
  { name: "Google", src: "/logos/logos/googlelogo.png", colors: ["#4285F4", "#EA4335"] },
  { name: "Apple", src: "/logos/logos/applelogo.png", colors: ["#A3AAAE", "#1D1D1F"] },
  { name: "Spotify", src: "/logos/logos/spotifylogo.png", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", src: "/logos/logos/netflixlogo.png", colors: ["#E50914", "#831010"] },
  { name: "Discord", src: "/logos/logos/discordlogo.png", colors: ["#5865F2", "#404EED"] },
  { name: "Airbnb", src: "/logos/logos/airbnblogo.png", colors: ["#FF5A5F", "#00A699"] },
];

// top color -> fades to black in the middle (where the logo sits) -> bottom color
function buildBandGradient([top, bottom]) {
  return `linear-gradient(
    180deg,
    transparent 0%,
    ${top}77 22%,
    #000000 48%,
    #000000 52%,
    ${bottom}77 78%,
    transparent 100%
  )`;
}

export default function BrandLogoGrid({ items = ITEMS }) {
  return (
    <div style={styles.wrapper}>
      {items.map((item) => (
        <div key={item.name} style={styles.tile}>
          <div
            style={{
              ...styles.band,
              background: buildBandGradient(item.colors),
            }}
          />
          {/* dark horizontal band so the logo always sits on black, regardless of the color band behind it */}
          <div style={styles.vignette} />
          <div style={styles.content}>
            <img src={item.src} alt={item.name} draggable="false" style={styles.img} />
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    background: "#000000",
    gap: "12px",
    padding: "60px 0",
  },
  tile: {
    position: "relative",
    flex: 1,
    display: "flex",
  },
  band: {
    position: "absolute",
    top: "-60px",
    bottom: "-60px",
    left: 0,
    right: 0,
    width: "70%",
    margin: "0 auto",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.9) 60%, transparent 100%)",
  },
  content: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "72px 16px",
    gap: "16px",
    width: "100%",
  },
  img: {
    height: 40,
    width: "auto",
    objectFit: "contain",
  },
};