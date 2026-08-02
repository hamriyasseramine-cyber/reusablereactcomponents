import { memo } from "react";

function HeartButton({ favorited, onToggle, showCount, count }) {
  return (
    <button
      onClick={onToggle}
      className={`heart-button${favorited ? " favorited" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        color: favorited ? "#ef4444" : "#6b7280",
        fontSize: "13px",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={favorited ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        className="heart-icon"
        style={{ opacity: favorited ? 1 : 0.7 }}
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
      {showCount && count}
    </button>
  );
}

export default memo(HeartButton);
