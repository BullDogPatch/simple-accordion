import { useState } from 'react';

function AccordionItem({ num, title, text }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  return (
    <div className="item"  onClick={toggleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">
        {open ? '+' : '-'}
      </p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
}

export default AccordionItem;
