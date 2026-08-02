const DEFAULT_LOGOS = [
  { name: "React", src: "/logos/react.png" },
  { name: "JavaScript", src: "/logos/js.png" },
  { name: "TypeScript", src: "/logos/ts.png" },
  { name: "Vite", src: "/logos/vite.png" },
  { name: "Figma", src: "/logos/figma.png" },
  { name: "Tailwind CSS", src: "/logos/tailwind.png" },
  { name: "Node.js", src: "/logos/node.png" },
  { name: "Git", src: "/logos/git.png" },
  { name: "Python", src: "/logos/python.png" },
  { name: "Docker", src: "/logos/docker.png" },
];

export default function LogoMarquee({ logos = DEFAULT_LOGOS, speed = 30 }) {
  const items = [...logos, ...logos];

  return (
    <div style={styles.wrapper}>
      {/* keyframes + hover need real CSS, so we inject a small style tag here */}
      <style>{`
        @keyframes logo-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          animation: logo-marquee-scroll ${speed}s linear infinite;
        }
        .logo-marquee-img {
          filter: grayscale(100%);
          opacity: 100%;
          transition: opacity 0.2s ease, filter 0.2s ease;
        }
        .logo-marquee-img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track { animation: none; }
        }
      `}</style>

      <div className="logo-marquee-track" style={styles.track}>
        {items.map((logo, i) => (
          <div style={styles.item} key={`${logo.name}-${i}`}>
            <img
              className="logo-marquee-img"
              src={logo.src}
              alt={logo.name}
              draggable="false"
              style={styles.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    padding: "40px 0 40px",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
  },
  track: {
    display: "flex",
    width: "max-content",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    padding: "0 40px",
  },
  img: {
    height: 40,
    width: "auto",
    objectFit: "contain",
    userSelect: "none",
  },
};
