import React, { useState } from 'react';
import { FaRegStar } from "react-icons/fa";

interface AccordionProps {
  items: { title?: string; content?: string; question?: string; answer?: string; }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 flex flex-col gap-3">
      {items.map((item, index) => (
        <div key={index} className="border-b py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className='flex items-center gap-2 text-[18px] font-bold'>
              {<FaRegStar/>} {item.title || item.question}
            </span>
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div className="pt-4 text-left">
              <p className='text-[16px] font-medium'>{item.content || item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;