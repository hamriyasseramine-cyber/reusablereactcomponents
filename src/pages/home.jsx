import KnowledgeQuote from "../components/home/texte.jsx";
import CodeQuote from "../components/home/CodeQuote.jsx";
import ButtonGroup from "../components/home/Buttons.jsx";
import ReactJSLogo from "../components/home/Reactjslogo.jsx";
import JSLogo from "../components/home/Jslogo.jsx";
function Home() {
  return (
    <div>
      <KnowledgeQuote />
      <ButtonGroup />
      <CodeQuote />
      <ReactJSLogo />
      <JSLogo />
    </div>
  );
}

export default Home;
