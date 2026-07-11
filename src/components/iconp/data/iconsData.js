// src/data/iconsData.js
// Chaque icône référence un nom exporté par "lucide-react".
// -> import dynamique dans IconCard / IconDetailPanel via icons["Home"], etc.

export const CATEGORIES = [
  { id: "all", label: "All", count: 4352 },
  { id: "arrows", label: "Arrows", count: 320 },
  { id: "interface", label: "Interface", count: 1250 },
  { id: "business", label: "Business", count: 630 },
  { id: "data", label: "Data", count: 410 },
  { id: "devices", label: "Devices", count: 560 },
  { id: "editor", label: "Editor", count: 320 },
  { id: "files", label: "Files", count: 280 },
  { id: "media", label: "Media", count: 190 },
  { id: "security", label: "Security", count: 210 },
  { id: "users", label: "Users", count: 152 },
];

// name = nom exact du composant lucide-react (PascalCase)
// label = libellé affiché sous l'icône
// category = clé de CATEGORIES
export const ICONS = [
  { name: "Home", label: "home", category: "interface" },
  { name: "Search", label: "search", category: "interface" },
  { name: "User", label: "user", category: "users" },
  { name: "Settings", label: "settings", category: "interface" },
  { name: "Bell", label: "bell", category: "interface" },
  { name: "Heart", label: "heart", category: "interface" },
  { name: "Star", label: "star", category: "interface" },
  { name: "Bookmark", label: "bookmark", category: "interface" },

  { name: "Mail", label: "mail", category: "interface" },
  { name: "Lock", label: "lock", category: "security" },
  { name: "Unlock", label: "unlock", category: "security" },
  { name: "Trash2", label: "trash", category: "editor" },
  { name: "Pencil", label: "edit", category: "editor" },
  { name: "Copy", label: "copy", category: "editor" },
  { name: "Download", label: "download", category: "files" },
  { name: "Upload", label: "upload", category: "files" },

  { name: "Share2", label: "share", category: "interface" },
  { name: "Calendar", label: "calendar", category: "business" },
  { name: "Clock", label: "clock", category: "business" },
  { name: "Tag", label: "tag", category: "business" },
  { name: "Folder", label: "folder", category: "files" },
  { name: "File", label: "file", category: "files" },
  { name: "Image", label: "image", category: "media" },
  { name: "Camera", label: "camera", category: "media" },

  { name: "Menu", label: "menu", category: "interface" },
  { name: "X", label: "x", category: "interface" },
  { name: "Plus", label: "plus", category: "interface" },
  { name: "Minus", label: "minus", category: "interface" },
  { name: "Check", label: "check", category: "interface" },
  { name: "ChevronLeft", label: "chevron-left", category: "arrows" },
  { name: "ChevronRight", label: "chevron-right", category: "arrows" },
  { name: "MoreVertical", label: "more-vertical", category: "interface" },

  { name: "Info", label: "info", category: "interface" },
  { name: "AlertCircle", label: "alert-circle", category: "interface" },
  { name: "HelpCircle", label: "help-circle", category: "interface" },
  { name: "CheckCircle2", label: "check-circle", category: "interface" },
  { name: "XCircle", label: "x-circle", category: "interface" },
  { name: "Play", label: "play", category: "media" },
  { name: "Pause", label: "pause", category: "media" },
  { name: "Square", label: "stop", category: "media" },

  { name: "Volume2", label: "volume-up", category: "media" },
  { name: "Volume1", label: "volume-down", category: "media" },
  { name: "VolumeX", label: "mute", category: "media" },
  { name: "Sun", label: "sun", category: "devices" },
  { name: "Moon", label: "moon", category: "devices" },
  { name: "Monitor", label: "screen", category: "devices" },
  { name: "Filter", label: "filter", category: "data" },
  { name: "SlidersHorizontal", label: "sliders", category: "data" },
];
