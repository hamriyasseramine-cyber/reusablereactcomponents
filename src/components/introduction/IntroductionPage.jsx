import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import ContentPanel from "./ContentPanel.jsx";
import TableOfContents from "./Tableofcontent.jsx";
import toc from "./tocData.js";

export default function IntroductionPage() {
  const [activeId, setActiveId] = useState(toc[0]?.id);
  const [activeChildId, setActiveChildId] = useState(toc[0]?.children?.[0]?.id);

  const handleSelectLabel = (id) => {
    setActiveId(id);
    const item = toc.find((t) => t.id === id);
    setActiveChildId(item?.children?.[0]?.id);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0a0a0a" }}>
      <Sidebar activeId={activeId} onSelect={handleSelectLabel} />

      <ContentPanel activeId={activeId} />

      <TableOfContents
        activeId={activeId}
        activeChildId={activeChildId}
        onSelectChild={setActiveChildId}
      />
    </div>
  );
}
