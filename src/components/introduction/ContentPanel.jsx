import ReactMarkdown from "react-markdown";
import toc from "./tocData.js";
import contentMap from "./contentLoader.js";
import CodeBlock from "./CodeBlock.jsx";

export default function ContentPanel({ activeId }) {
  const activeLabel = toc.find((item) => item.id === activeId);
  const children = activeLabel?.children || [];

  return (
    <main
      style={{
        flex: 1,
        padding: "40px 48px",
        color: "#e5e7eb",
        maxWidth: "720px",
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ color: "#ffffff", marginBottom: "32px" }}>
        {activeLabel?.label}
      </h1>

      {children.map((child) => (
        <section key={child.id} id={child.id} style={{ marginBottom: "56px" }}>
          <ReactMarkdown
            components={{
              h1: (props) => (
                <h2 style={{ color: "#ffffff", fontSize: "22px", marginBottom: "12px" }} {...props} />
              ),
              p: (props) => (
                <p style={{ color: "#9ca3af", marginBottom: "12px" }} {...props} />
              ),
              li: (props) => (
                <li style={{ color: "#9ca3af", marginBottom: "6px" }} {...props} />
              ),
              code: ({ inline, className, children, ...props }) => {
                if (inline) {
                  return (
                    <code
                      style={{
                        background: "#1a1a1a",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        color: "#e5e7eb",
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                const language = className?.replace("language-", "") || "jsx";
                const codeString = String(children).replace(/\n$/, "");
                return <CodeBlock code={codeString} language={language} />;
              },
              pre: ({ children }) => <>{children}</>,
            }}
          >
            {contentMap[child.id] || `Content for "${child.label}" coming soon.`}
          </ReactMarkdown>
        </section>
      ))}
    </main>
  );
}