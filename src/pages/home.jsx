import Hero from "../components/home/Buttons.jsx";
import CodeQuote from "../components/home/CodeQuote.jsx";
import Jslogo from "../components/home/Jslogo.jsx";
import Reactjslogo from "../components/home/ReactjsLogo.jsx";
import Texte from "../components/home/Texte.jsx";

function Home() {
  return (
    <div
      style={{
        position: "relative",
        background: "#000000",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      <Reactjslogo />
      <Jslogo />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "36px",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <Texte />
        <Hero />
        <CodeQuote />
      </div>
    </div>
  );
}

export default Home;