import { useState } from "react";
import Sidebar from "../components/introduction/Sidebar.jsx";
import TableOfContents from "../components/introduction/Tableofcontent.jsx";
import toc from "../components/introduction/tocData.js";

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

      <main style={{ flex: 1, padding: "40px", color: "#e5e7eb" }}>
        {/* page content goes here, based on activeId / activeChildId */}
      </main>

      <TableOfContents
        activeId={activeId}
        activeChildId={activeChildId}
        onSelectChild={setActiveChildId}
      />
    </div>
  );
}
