import { useState } from 'react';

function AccordionItem({ num, title, text }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  return (
    <div className={`item ${open ? 'open' : ''}`}  onClick={toggleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">
        {open ? '+' : '-'}
      </p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
}

export default AccordionItem;
