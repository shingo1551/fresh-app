import { useState } from "preact/hooks";
export default function Animation() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setVisible(false);
      }, 400);
    } else {
      setOpen(true);
      setVisible(true);
    }
  };

  return (
    <div>
      <button onClick={onClick}>{open ? "X" : "O"}</button>
      <div class={`contents ${visible ? "fixed" : ""}`}>Contents</div>
      {visible
        ? <div class={`menu ${open ? "open" : "close"}`}>Menu</div>
        : null}
    </div>
  );
}
