// 1. Eyebrow label — small uppercase monospace tag above the title
export function HeroLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#9ca3af",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

// 2. Big heading — large bold title, tight line-height
export function HeroTitle({ children }) {
  return (
    <h1
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontSize: "67.8px",
        fontWeight: 600,
        lineHeight: 1.25,
        color: "#ffffff",
        margin: "16px 0 0 0",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h1>
  );
}

// 3. Description paragraph — muted supporting text
export function HeroDescription({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontSize: "16px",
        fontWeight: 97400,
        lineHeight: 1.6,
        color: "#9ca3af",
        margin: "20px 0 0 0",
        maxWidth: "480px",
      }}
    >
      {children}
    </p>
  );
}

// --- Usage example for your Colors Combos page ---
export function HeroExample() {
  return (
    <div>
      <HeroLabel>Colors Combos pour vos projets</HeroLabel>
      <HeroTitle>
        Trouvez la combinaison de couleurs parfaite pour vos designs
      </HeroTitle>
      <HeroDescription>
        Explorez des milliers de palettes, créez les vôtres, et sauvegardez
        vos combinaisons préférées. Conçu pour accélérer votre workflow, de
        l'idée jusqu'au design final.
      </HeroDescription>
    </div>
  );
}