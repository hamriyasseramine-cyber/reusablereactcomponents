export default function CodeQuote() {
  return (
    <p
      style={{
        margin: 0,
        textAlign: "center",
        fontFamily: "'Monotype Corsiva', 'Segoe Script', cursive",
        fontWeight: 400,
        letterSpacing: "0.01em",
        fontSize: "clamp(28px, 4.2vw, 42px)",
        lineHeight: 1.7,
        color: "#f2f1ec",
      }}
    >
      Code grows stronger
      <br />
      <span
        style={{
          position: "relative",
          display: "inline-block",
          padding: "0.18em 0.15em",
        }}
      >
        <svg
          viewBox="0 0 600 140"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            left: "-10%",
            top: "-20%",
            width: "122%",
            height: "169%",
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          <path
            d="M 40,70
               C 40,25 130,5 300,5
               C 480,5 565,30 565,68
               C 565,108 470,132 295,130
               C 120,128 35,105 45,66
               C 55,30 160,8 320,10
               C 470,12 555,32 550,64
               C 546,92 460,112 300,112"
            fill="none"
            stroke="#4b8cf0"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
        when it's shared, not stored.
      </span>
    </p>
  );
}