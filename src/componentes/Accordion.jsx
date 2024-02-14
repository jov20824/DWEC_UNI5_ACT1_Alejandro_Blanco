import AccordionItem from './AccordionItem';

//En esta función añadimos la información que se encuentra en el archivo data.js
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default Accordion;
