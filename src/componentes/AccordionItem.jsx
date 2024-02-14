import React, { useState } from 'react';

//En esta funcion comprobamos el estado del menú. Si algún elemento está inactivo,
//lo volvemos activo y viceversa. Cuando se detecta el estado de algún desplegable
//como activo, se despliega, y como inactivo, se repliega.
function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  //funcion que cambia el estado de los elementos
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  //Se devuelve un boton que contiene la pregunta de data.js, que al hacerse click en él
  //llama a la funcion toggleAccordion para cambiar de estado, y un div que contiene otro
  //con la respuesta de data.js
  return (
    <div className={`accordion_item ${isOpen ? "active" : ""}`}>
      <button className="button" onClick={toggleAccordion}>
        <span>{question}</span> 
      </button>
      <div className={`answer_wrapper ${isOpen ? "open" : ""}`}>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
}

export default AccordionItem;

