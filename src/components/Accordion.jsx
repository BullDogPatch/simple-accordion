import AccordionItem from './AccordionItem';

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem key={i} title={faq.title} text={faq.text} num={i} />
      ))}
    </div>
  );
}

export default Accordion;
