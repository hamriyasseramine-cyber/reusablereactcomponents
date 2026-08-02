import { useState, useEffect } from "react";
import LogoBadge from "./LogoBadge";
import ColorPalette from "./ColorPalette";

// put logo files in /public/logos/
const BRANDS = [
  {
    name: "HubSpot",
    src: "/logos/hubspot.png",
    colors: ["#00A4BD", "#FF7A59"],
  },
  {
    name: "Spotify",
    src: "/logos/spotify.png",
    colors: ["#1DB954", "#191414"],
  },
  { name: "Stripe", src: "/logos/stripe.png", colors: ["#635BFF", "#00D4FF"] },
  { name: "Airbnb", src: "/logos/airbnb.png", colors: ["#FF5A5F", "#00A699"] },
  { name: "Slack", src: "/logos/slack.png", colors: ["#611F69", "#36C5F0"] },
  { name: "PayPal", src: "/logos/paypal.png", colors: ["#003087", "#009CDE"] },
  { name: "Figma", src: "/logos/figma.png", colors: ["#F24E1E", "#A259FF"] },
  {
    name: "Instagram",
    src: "/logos/instagram.png",
    colors: ["#833AB4", "#FD1D1D", "#FCB045"],
  },
  {
    name: "Google",
    src: "/logos/google.png",
    colors: ["#4285F4", "#EA4335", "#FBBC05"],
  },
  {
    name: "Firefox",
    src: "/logos/firefox.png",
    colors: ["#FF9500", "#FF3B00", "#FFCC00"],
  },
  {
    name: "Discord",
    src: "/logos/discord.png",
    colors: ["#5865F2", "#404EED", "#EB459E"],
  },
  {
    name: "Twitch",
    src: "/logos/twitch.png",
    colors: ["#9146FF", "#772CE8", "#F0F0FF"],
  },
];

const PAUSE_MS = 5000; // how long each logo + palette stays before switching
const TRANSITION_MS = 550; // how long the scroll travel takes
const STAGGER_MS = 160; // palette moves first, logo follows this many ms later
const SCROLL_DISTANCE = 90; // px travelled during the scroll (bigger = more dramatic)

export default function BrandShowcase({ brands = BRANDS }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const totalExitTime = TRANSITION_MS + STAGGER_MS; // wait for both to finish scrolling out

    const interval = setInterval(() => {
      // scroll out: palette first, logo follows
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % brands.length);
        // scroll in: palette first, logo follows
        setVisible(true);
      }, totalExitTime);
    }, PAUSE_MS);

    return () => clearInterval(interval);
  }, [brands.length]);

  const current = brands[index];

  return (
    <div style={styles.wrapper}>
      <style>{`
        .brand-showcase-part {
          transition: opacity ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1),
                      transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .brand-showcase-part.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .brand-showcase-part.hidden {
          opacity: 0;
          transform: translateY(-${SCROLL_DISTANCE}px);
        }
      `}</style>

      <div style={styles.item}>
        <div
          className={`brand-showcase-part ${visible ? "visible" : "hidden"}`}
          style={{ transitionDelay: visible ? "0ms" : "0ms" }}
        >
          <ColorPalette colors={current.colors} size={130} />
        </div>
        <div
          className={`brand-showcase-part ${visible ? "visible" : "hidden"}`}
          style={{
            transitionDelay: visible ? `${STAGGER_MS}ms` : `${STAGGER_MS}ms`,
          }}
        >
          <LogoBadge name={current.name} src={current.src} size={140} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "64px 16px",
    background: "#000000",
    overflow: "hidden",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "56px",
  },
};
