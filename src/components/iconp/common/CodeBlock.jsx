// src/components/common/CodeBlock.jsx

/**
 * Bloc de code réutilisable (SVG source, snippet React, JSON, etc.)
 * Coloration très simple, noir/blanc/gris uniquement.
 *
 * props:
 * - code: string
 */
export default function CodeBlock({ code }) {
  return (
    <div className="ic-codeblock">
      <pre>{code}</pre>
    </div>
  );
}
