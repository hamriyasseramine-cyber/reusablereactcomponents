export const previewKeyframes = `
  @keyframes categoryPreviewPop {
    0% { opacity: 0; transform: translateY(8px) scale(0.9); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes previewSpin {
    to { transform: rotate(360deg); }
  }
  @keyframes previewPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.12); }
  }
  @keyframes previewSlideIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;
