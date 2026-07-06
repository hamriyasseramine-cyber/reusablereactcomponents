const RAW_CATEGORIES = [
  "Alert",
  "Avatar",
  "Badge",
  "Button",
  "Card",
  "Dropdown",
  "Footer",
  "Form",
  "Input",
  "Loader",
  "Modal",
  "Navbar",
  "Sidebar",
  "Table",
  "Tabs",
  "Tooltip",
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  ...RAW_CATEGORIES.sort((a, b) => a.localeCompare(b)).map((label) => ({
    id: label.toLowerCase(),
    label,
  })),
];