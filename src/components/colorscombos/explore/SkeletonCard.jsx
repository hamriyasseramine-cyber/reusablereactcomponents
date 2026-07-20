export default function SkeletonCard() {
  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid #1f1f1f",
        borderRadius: "14px",
        padding: "12px",
      }}
    >
      <style>{`
        .skeleton-shimmer {
          background: linear-gradient(90deg, #1a1a1a 0%, #262626 50%, #1a1a1a 100%);
          background-size: 200% 100%;
          animation: shimmer 1.4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div
        className="skeleton-shimmer"
        style={{ width: "100%", height: "80px", borderRadius: "10px" }}
      />
      <div
        className="skeleton-shimmer"
        style={{
          width: "60%",
          height: "14px",
          borderRadius: "4px",
          marginTop: "14px",
        }}
      />
      <div
        className="skeleton-shimmer"
        style={{
          width: "35%",
          height: "10px",
          borderRadius: "4px",
          marginTop: "8px",
        }}
      />
    </div>
  );
}
