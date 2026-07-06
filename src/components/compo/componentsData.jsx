import MainNavbar from "../../library/navbar/MainNavbar.jsx";
import MainNavbarCode from "../../library/navbar/MainNavbar.jsx?raw";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

// Mock preview swatches per category — placeholders until real component
// source is wired in. Each render fn returns a small visual stand-in.
export const previewRenderers = {
  button: () => (
    <button
      style={{
        background: "#ffffff",
        color: "#000000",
        border: "none",
        borderRadius: "8px",
        padding: "8px 18px",
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      Button
    </button>
  ),
  navbar: () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#141414",
        border: "1px solid #232323",
        borderRadius: "8px",
        padding: "8px 12px",
      }}
    >
      <div style={{ width: 18, height: 18, borderRadius: 4, background: "#3a3a3a" }} />
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ width: 24, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
        <div style={{ width: 24, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
        <div style={{ width: 24, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
      </div>
    </div>
  ),
  sidebar: () => (
    <div style={{ display: "flex", gap: 6, width: "100%" }}>
      <div style={{ width: "34%", height: 70, borderRadius: 6, background: "#141414", border: "1px solid #232323" }} />
      <div style={{ flex: 1, height: 70, borderRadius: 6, background: "#101010", border: "1px solid #1a1a1a" }} />
    </div>
  ),
  card: () => (
    <div
      style={{
        width: "80%",
        borderRadius: 8,
        background: "#141414",
        border: "1px solid #232323",
        padding: 10,
      }}
    >
      <div style={{ width: "100%", height: 32, borderRadius: 5, background: "#232323", marginBottom: 8 }} />
      <div style={{ width: "70%", height: 6, borderRadius: 3, background: "#3a3a3a", marginBottom: 5 }} />
      <div style={{ width: "50%", height: 6, borderRadius: 3, background: "#2a2a2a" }} />
    </div>
  ),
  input: () => (
    <div
      style={{
        width: "80%",
        height: 34,
        borderRadius: 8,
        background: "#141414",
        border: "1px solid #2a2a2a",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      <div style={{ width: "40%", height: 6, borderRadius: 3, background: "#3a3a3a" }} />
    </div>
  ),
  modal: () => (
    <div style={{ position: "relative", width: "80%", height: 70 }}>
      <div style={{ position: "absolute", inset: 0, background: "#0a0a0a", opacity: 0.6, borderRadius: 6 }} />
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "12%",
          right: "12%",
          bottom: "18%",
          background: "#161616",
          border: "1px solid #2a2a2a",
          borderRadius: 8,
        }}
      />
    </div>
  ),
  dropdown: () => (
    <div style={{ width: "60%" }}>
      <div style={{ height: 30, borderRadius: 6, background: "#141414", border: "1px solid #2a2a2a", marginBottom: 4 }} />
      <div style={{ height: 40, borderRadius: 6, background: "#101010", border: "1px solid #1e1e1e" }} />
    </div>
  ),
  badge: () => (
    <div
      style={{
        background: "#ffffff",
        color: "#000",
        fontSize: 11,
        fontWeight: 700,
        borderRadius: 999,
        padding: "4px 12px",
      }}
    >
      Badge
    </div>
  ),
  tooltip: () => (
    <div style={{ position: "relative" }}>
      <div style={{ width: 50, height: 20, borderRadius: 5, background: "#232323" }} />
      <div
        style={{
          position: "absolute",
          top: -28,
          left: -8,
          background: "#ffffff",
          color: "#000",
          fontSize: 10,
          fontWeight: 600,
          borderRadius: 5,
          padding: "3px 8px",
          whiteSpace: "nowrap",
        }}
      >
        Tooltip
      </div>
    </div>
  ),
  alert: () => (
    <div
      style={{
        width: "80%",
        borderRadius: 8,
        background: "#161611",
        border: "1px solid #3a3a20",
        padding: "8px 10px",
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#e8c547", flexShrink: 0 }} />
      <div style={{ width: "70%", height: 6, borderRadius: 3, background: "#4a4a3a" }} />
    </div>
  ),
  table: () => (
    <div style={{ width: "85%" }}>
      {[0, 1, 2].map((r) => (
        <div key={r} style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          <div style={{ flex: 1, height: 8, borderRadius: 2, background: r === 0 ? "#3a3a3a" : "#202020" }} />
          <div style={{ flex: 1, height: 8, borderRadius: 2, background: r === 0 ? "#3a3a3a" : "#202020" }} />
          <div style={{ flex: 1, height: 8, borderRadius: 2, background: r === 0 ? "#3a3a3a" : "#202020" }} />
        </div>
      ))}
    </div>
  ),
  tabs: () => (
    <div style={{ display: "flex", gap: 4 }}>
      {["A", "B", "C"].map((t, i) => (
        <div
          key={t}
          style={{
            padding: "6px 14px",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 600,
            color: i === 0 ? "#000" : "#8a8a8a",
            background: i === 0 ? "#ffffff" : "#141414",
            border: i === 0 ? "none" : "1px solid #232323",
          }}
        >
          {t}
        </div>
      ))}
    </div>
  ),
  avatar: () => (
    <div style={{ display: "flex" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#2a2a2a",
            border: "2px solid #0d0d0d",
            marginLeft: i === 0 ? 0 : -10,
          }}
        />
      ))}
    </div>
  ),
  loader: () => (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "3px solid #232323",
        borderTopColor: "#ffffff",
      }}
    />
  ),
  form: () => (
    <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ height: 24, borderRadius: 5, background: "#141414", border: "1px solid #232323" }} />
      <div style={{ height: 24, borderRadius: 5, background: "#141414", border: "1px solid #232323" }} />
      <div style={{ height: 22, borderRadius: 5, background: "#ffffff", width: "50%" }} />
    </div>
  ),
  footer: () => (
    <div style={{ width: "85%", display: "flex", justifyContent: "space-between" }}>
      {[0, 1, 2].map((c) => (
        <div key={c} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ width: 30, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
          <div style={{ width: 24, height: 5, borderRadius: 3, background: "#202020" }} />
          <div style={{ width: 24, height: 5, borderRadius: 3, background: "#202020" }} />
        </div>
      ))}
    </div>
  ),
};

// Component catalog — swap `code: null` for real source per component as it's built.
export const COMPONENTS = [
  { id: "btn-filled", name: "Filled Button", category: "button", code: null },
  { id: "btn-outline", name: "Outline Button", category: "button", code: null },
  {
    id: "nav-main",
    name: "Main Navbar",
    category: "navbar",
    Component: MainNavbar,
    code: MainNavbarCode,
    liveScope: { Link, NavLink, logo },
    usageSections: [
      {
        heading: "Make it yours",
        text: "The GitHub and LinkedIn links in the actions area currently point to the original author's profiles. Update the href attributes on both anchor tags to your own URLs before shipping this navbar on your own site.",
      },
      {
        heading: "Why react-router-dom",
        text: "This component uses Link and NavLink from react-router-dom instead of plain <a> tags. NavLink automatically applies an \"active\" class to whichever link matches the current route, which is how the highlighted nav item works. Your project needs react-router-dom installed, and this component needs to be rendered somewhere inside a <BrowserRouter>.",
      },
      {
        heading: "Swap the logo",
        text: "The logo is imported as a local image file (logo.png) sitting next to this component. Replace that file with your own logo of the same name, or update the import path and alt text to point to your own asset.",
      },
      {
        heading: "Update the routes",
        text: "The nav links (Introduction, Components, Categories, Favorites, Colors Combos, Icons) point to specific paths and labels from the original project. Rename the labels and update the \"to\" values so they match the actual pages of your own application.",
      },
      {
        heading: "Styling is self-contained",
        text: "All of the CSS lives inline at the top of this file as a plain string injected through a <style> tag, so there's no external stylesheet to track down. Edit colors, spacing, and fonts directly there.",
      },
    ],
  },
  { id: "sidebar-cat", name: "Categories Sidebar", category: "sidebar", code: null },
  { id: "card-basic", name: "Basic Card", category: "card", code: null },
  { id: "input-text", name: "Text Input", category: "input", code: null },
  { id: "modal-basic", name: "Basic Modal", category: "modal", code: null },
  { id: "dropdown-basic", name: "Dropdown Menu", category: "dropdown", code: null },
  { id: "badge-basic", name: "Badge", category: "badge", code: null },
  { id: "tooltip-basic", name: "Tooltip", category: "tooltip", code: null },
  { id: "alert-warning", name: "Warning Alert", category: "alert", code: null },
  { id: "table-basic", name: "Data Table", category: "table", code: null },
  { id: "tabs-basic", name: "Tabs", category: "tabs", code: null },
  { id: "avatar-group", name: "Avatar Group", category: "avatar", code: null },
  { id: "loader-spinner", name: "Spinner", category: "loader", code: null },
  { id: "form-basic", name: "Basic Form", category: "form", code: null },
  { id: "footer-basic", name: "Footer", category: "footer", code: null },
];