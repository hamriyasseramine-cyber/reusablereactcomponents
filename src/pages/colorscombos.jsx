import { Outlet } from "react-router-dom";
import ColorsCombosSidebar from "../components/colorscombos/sidebar/ColorsCombosSidebar.jsx";

export default function ColorsCombos() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0a0a0a" }}>
      <ColorsCombosSidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        <Outlet />
      </main>
    </div>
  );
}