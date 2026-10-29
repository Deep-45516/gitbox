import { useId, useState } from "react";

// Shows `children` always; `more` slides open on click.
export default function ReadMore({ children, more, t }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      {children}
      <div id={id} className={`readmore ${open ? "is-open" : ""}`}>
        <div className="readmore-inner">{more}</div>
      </div>
      <button
        type="button"
        className="readmore-btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {open ? t.readLess : t.readMore}
      </button>
    </>
  );
}
