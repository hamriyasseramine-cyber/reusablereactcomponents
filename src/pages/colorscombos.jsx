import { Outlet } from "react-router-dom";

export default function ColorsCombos() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <main style={{ padding: "40px" }}>
        <Outlet />
      </main>
    </div>
  );
}