// Loads every .md file under ./content/**/*.md as raw text,
// and maps it by filename (which matches each child's id in tocData.js).
// Example: ./content/intro-react/what-is-react.md -> key "what-is-react"

const modules = import.meta.glob("./content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const contentMap = {};

Object.entries(modules).forEach(([path, raw]) => {
  const fileName = path.split("/").pop().replace(".md", "");
  contentMap[fileName] = raw;
});

export default contentMap;
