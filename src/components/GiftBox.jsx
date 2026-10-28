import { useEffect, useRef } from "react";

// Resting pose: tilted so the lower strip is visible, just like the original artwork.
const REST = { x: 16, y: -8 };
const wrap = (v) => ((v + 540) % 360) - 180;

export default function GiftBox({ label }) {
  const cube = useRef(null);
  const hit = useRef(null);

  useEffect(() => {
    const el = cube.current;
    const area = hit.current;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const s = { x: REST.x, y: REST.y, vx: 0, vy: 0, last: 0 };
    let drag = null;
    let raf;

    const tick = (now) => {
      const t = now / 1000;
      if (!drag) {
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.94;
        s.vy *= 0.94;
        if (now - s.last > 2200) {
          s.x += wrap(REST.x - s.x) * 0.04;
          s.y += wrap(REST.y - s.y) * 0.04;
        }
      }
      const sway = !drag && !still && now - s.last > 2200;
      const rx = s.x + (sway ? Math.sin(t * 0.9) * 4 : 0);
      const ry = s.y + (sway ? Math.sin(t * 1.2) * 12 : 0);
      el.style.transform = `rotateZ(4deg) rotateX(${rx}deg) rotateY(${ry}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const down = (e) => {
      drag = { x: e.clientX, y: e.clientY };
      s.vx = s.vy = 0;
      area.setPointerCapture(e.pointerId);
    };
    const move = (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      drag = { x: e.clientX, y: e.clientY };
      s.y += dx * 0.7;
      s.x -= dy * 0.5;
      s.vy = dx * 0.7;
      s.vx = -dy * 0.5;
      s.last = performance.now();
    };
    const up = () => {
      drag = null;
      s.last = performance.now();
    };

    area.addEventListener("pointerdown", down);
    area.addEventListener("pointermove", move);
    area.addEventListener("pointerup", up);
    area.addEventListener("pointercancel", up);
    return () => {
      cancelAnimationFrame(raf);
      area.removeEventListener("pointerdown", down);
      area.removeEventListener("pointermove", move);
      area.removeEventListener("pointerup", up);
      area.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <div className="box-pos">
      <div className="box-shadow" aria-hidden="true" />
      <div className="box-rise">
        <div className="box-bob">
          <div
            ref={hit}
            className="box-hit"
            role="img"
            aria-label="Atithi saunf and mishri gift box. Drag to rotate."
          >
            <div ref={cube} className="cube">
              <div className="face f-front" />
              <div className="face f-back"><span>Atithi</span></div>
              <div className="face f-top" />
              <div className="face f-bottom" />
              <div className="face f-left" />
              <div className="face f-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
