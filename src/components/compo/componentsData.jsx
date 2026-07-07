import MainNavbar from "../../library/navbar/MainNavbar.jsx";
import MainNavbarCode from "../../library/navbar/MainNavbar.jsx?raw";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  ButtonPreview,
  NavbarPreview,
  SidebarPreview,
  CardPreview,
  InputPreview,
  ModalPreview,
  DropdownPreview,
  BadgePreview,
  TooltipPreview,
  AlertPreview,
  TablePreview,
  TabsPreview,
  AvatarPreview,
  LoaderPreview,
  FormPreview,
  FooterPreview,
} from "./categoryPreviews.jsx";

export { previewKeyframes } from "./previewKeyframes.js";

// Map of category id -> preview component (rendered as <Preview />, not called).
export const previewRenderers = {
  button: ButtonPreview,
  navbar: NavbarPreview,
  sidebar: SidebarPreview,
  card: CardPreview,
  input: InputPreview,
  modal: ModalPreview,
  dropdown: DropdownPreview,
  badge: BadgePreview,
  tooltip: TooltipPreview,
  alert: AlertPreview,
  table: TablePreview,
  tabs: TabsPreview,
  avatar: AvatarPreview,
  loader: LoaderPreview,
  form: FormPreview,
  footer: FooterPreview,
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