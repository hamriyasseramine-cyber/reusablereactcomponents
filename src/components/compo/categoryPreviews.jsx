import { useState, useEffect } from "react";

// Every preview plays its "reveal" once on mount (page load), then settles.
// While `active` (the card is hovered) it keeps looping continuously.
// The moment `active` goes false, the loop stops and it snaps back to its
// settled resting state.

export function ButtonPreview({ active }) {
  return (
    <button
      style={{
        background: "#ffffff",
        color: "#000000",
        border: "none",
        borderRadius: "8px",
        padding: "8px 18px",
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "system-ui, sans-serif",
        transform: active ? "scale(0.94)" : "scale(1)",
        transition: "transform 0.15s ease",
      }}
    >
      Button
    </button>
  );
}

export function NavbarPreview() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#141414",
        border: "1px solid #232323",
        borderRadius: "8px",
        padding: "8px 12px",
      }}
    >
      <div style={{ width: 18, height: 18, borderRadius: 4, background: "#3a3a3a" }} />
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ width: 24, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
        <div style={{ width: 24, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
        <div style={{ width: 24, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
      </div>
    </div>
  );
}

export function SidebarPreview({ active }) {
  const [step, setStep] = useState(0);

  // Initial reveal on mount, once.
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 350);
    const t2 = setTimeout(() => setStep(2), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Keep cycling while hovered; snap to settled step when not.
  useEffect(() => {
    if (!active) {
      setStep(2);
      return;
    }
    const id = setInterval(() => setStep((s) => (s + 1) % 3), 400);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ display: "flex", gap: 6, width: "100%" }}>
      <div style={{ width: "34%", height: 70, borderRadius: 6, background: "#141414", border: "1px solid #232323", padding: 6, display: "flex", flexDirection: "column", gap: 5 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              height: 8,
              borderRadius: 3,
              background: i === step ? "#ffffff" : "#2a2a2a",
              transition: "background 0.2s ease",
            }}
          />
        ))}
      </div>
      <div style={{ flex: 1, height: 70, borderRadius: 6, background: "#101010", border: "1px solid #1a1a1a" }} />
    </div>
  );
}

export function CardPreview() {
  return (
    <div
      style={{
        width: "80%",
        borderRadius: 8,
        background: "#141414",
        border: "1px solid #232323",
        padding: 10,
      }}
    >
      <div style={{ width: "100%", height: 32, borderRadius: 5, background: "#232323", marginBottom: 8 }} />
      <div style={{ width: "70%", height: 6, borderRadius: 3, background: "#3a3a3a", marginBottom: 5 }} />
      <div style={{ width: "50%", height: 6, borderRadius: 3, background: "#2a2a2a" }} />
    </div>
  );
}

export function InputPreview({ active }) {
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    if (!active) {
      setShowCaret(true);
      return;
    }
    const id = setInterval(() => setShowCaret((s) => !s), 400);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div
      style={{
        width: "80%",
        height: 34,
        borderRadius: 8,
        background: "#141414",
        border: "1px solid #2a2a2a",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        gap: 4,
      }}
    >
      <div style={{ width: "40%", height: 6, borderRadius: 3, background: "#3a3a3a" }} />
      <div style={{ width: 1.5, height: 14, background: showCaret ? "#ffffff" : "transparent" }} />
    </div>
  );
}

export function ModalPreview({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!active) {
      setOpen(true);
      return;
    }
    const id = setInterval(() => setOpen((o) => !o), 500);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ position: "relative", width: "80%", height: 70 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0a0a0a",
          opacity: open ? 0.65 : 0,
          borderRadius: 6,
          transition: "opacity 0.25s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "12%",
          right: "12%",
          bottom: "18%",
          background: "#161616",
          border: "1px solid #2a2a2a",
          borderRadius: 8,
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      />
    </div>
  );
}

export function DropdownPreview({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!active) {
      setOpen(true);
      return;
    }
    const id = setInterval(() => setOpen((o) => !o), 450);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ width: "60%" }}>
      <div style={{ height: 30, borderRadius: 6, background: "#141414", border: "1px solid #2a2a2a", marginBottom: 4 }} />
      <div
        style={{
          height: open ? 40 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          borderRadius: 6,
          background: "#101010",
          border: open ? "1px solid #1e1e1e" : "none",
          transition: "height 0.2s ease, opacity 0.15s ease",
        }}
      />
    </div>
  );
}

export function BadgePreview({ active }) {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "#000",
        fontSize: 11,
        fontWeight: 700,
        borderRadius: 999,
        padding: "4px 12px",
        animation: active ? "previewPulse 0.6s ease-in-out infinite" : "previewPulse 0.5s ease-in-out 1",
      }}
    >
      Badge
    </div>
  );
}

export function TooltipPreview({ active }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!active) {
      setShow(true);
      return;
    }
    const id = setInterval(() => setShow((s) => !s), 450);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: 50, height: 20, borderRadius: 5, background: "#232323" }} />
      <div
        style={{
          position: "absolute",
          top: -28,
          left: -8,
          background: "#ffffff",
          color: "#000",
          fontSize: 10,
          fontWeight: 600,
          borderRadius: 5,
          padding: "3px 8px",
          whiteSpace: "nowrap",
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.15s ease, transform 0.15s ease",
        }}
      >
        Tooltip
      </div>
    </div>
  );
}

export function AlertPreview({ active }) {
  return (
    <div
      style={{
        width: "80%",
        borderRadius: 8,
        background: "#161611",
        border: "1px solid #3a3a20",
        padding: "8px 10px",
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#e8c547",
          flexShrink: 0,
          animation: active ? "previewPulse 0.6s ease-in-out infinite" : "previewPulse 0.5s ease-in-out 1",
        }}
      />
      <div style={{ width: "70%", height: 6, borderRadius: 3, background: "#4a4a3a" }} />
    </div>
  );
}

export function TablePreview({ active }) {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setActiveRow(1), 300);
    const t2 = setTimeout(() => setActiveRow(2), 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (!active) {
      setActiveRow(2);
      return;
    }
    const id = setInterval(() => setActiveRow((r) => (r + 1) % 3), 400);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ width: "85%" }}>
      {[0, 1, 2].map((r) => (
        <div key={r} style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          {[0, 1, 2].map((c) => (
            <div
              key={c}
              style={{
                flex: 1,
                height: 8,
                borderRadius: 2,
                background: r === activeRow ? "#4a4a4a" : "#202020",
                transition: "background 0.2s ease",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function TabsPreview({ active }) {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setTab(1), 350);
    const t2 = setTimeout(() => setTab(2), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (!active) {
      setTab(2);
      return;
    }
    const id = setInterval(() => setTab((a) => (a + 1) % 3), 450);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ display: "flex", gap: 4 }}>
      {["A", "B", "C"].map((t, i) => (
        <div
          key={t}
          style={{
            padding: "6px 14px",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 600,
            color: i === tab ? "#000" : "#8a8a8a",
            background: i === tab ? "#ffffff" : "#141414",
            border: i === tab ? "none" : "1px solid #232323",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

export function AvatarPreview({ active }) {
  return (
    <div style={{ display: "flex" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#2a2a2a",
            border: "2px solid #0d0d0d",
            marginLeft: i === 0 ? 0 : -10,
            transform: active ? "translateY(-4px)" : "translateY(0)",
            transition: `transform 0.25s ease ${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}

export function LoaderPreview({ active }) {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "3px solid #232323",
        borderTopColor: "#ffffff",
        animation: active ? "previewSpin 0.7s linear infinite" : "previewSpin 0.7s linear 1",
      }}
    />
  );
}

export function FormPreview({ active }) {
  const [focused, setFocused] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setFocused(1), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!active) {
      setFocused(1);
      return;
    }
    const id = setInterval(() => setFocused((f) => (f + 1) % 2), 450);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: 6 }}>
      {[0, 1].map((i) => (
        <div
          key={i}
          style={{
            height: 24,
            borderRadius: 5,
            background: "#141414",
            border: focused === i ? "1px solid #ffffff" : "1px solid #232323",
            transition: "border-color 0.2s ease",
          }}
        />
      ))}
      <div style={{ height: 22, borderRadius: 5, background: "#ffffff", width: "50%" }} />
    </div>
  );
}

export function FooterPreview({ active }) {
  return (
    <div style={{ width: "85%", display: "flex", justifyContent: "space-between" }}>
      {[0, 1, 2].map((c) => (
        <div
          key={c}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            transform: active ? "translateY(-3px)" : "translateY(0)",
            transition: `transform 0.25s ease ${c * 0.05}s`,
          }}
        >
          <div style={{ width: 30, height: 6, borderRadius: 3, background: "#3a3a3a" }} />
          <div style={{ width: 24, height: 5, borderRadius: 3, background: "#202020" }} />
          <div style={{ width: 24, height: 5, borderRadius: 3, background: "#202020" }} />
        </div>
      ))}
    </div>
  );
}