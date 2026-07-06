import { useState, useLayoutEffect, useRef } from "react";

export default function AutoFitPreview({ Component }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [boxHeight, setBoxHeight] = useState(null);
  const [activeHref, setActiveHref] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      const containerWidth = outer.clientWidth;
      const naturalWidth = inner.scrollWidth;
      const naturalHeight = inner.scrollHeight;

      const nextScale = naturalWidth > containerWidth ? containerWidth / naturalWidth : 1;
      setScale(nextScale);
      setBoxHeight(naturalHeight * nextScale);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [Component]);

  return (
    <div
      ref={outerRef}
      style={{
        width: "100%",
        overflow: "hidden",
        height: boxHeight ? `${boxHeight}px` : "auto",
      }}
    >
      <div
        ref={innerRef}
        className="preview-scope"
        onClickCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const anchor = e.target.closest("a");
          if (anchor) {
            const href = anchor.getAttribute("href");
            if (href) setActiveHref(href);
          }
        }}
        style={{
          display: "inline-block",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <style>{`
          .preview-scope > * {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            box-sizing: border-box !important;
          }
          .preview-scope .site-header-nav-link {
            color: #9ca3af !important;
            font-weight: 500 !important;
          }
          ${
            activeHref
              ? `.preview-scope a[href="${activeHref}"] {
                  color: #ffffff !important;
                  font-weight: 600 !important;
                }`
              : ""
          }
        `}</style>
        <Component />
      </div>
    </div>
  );
}