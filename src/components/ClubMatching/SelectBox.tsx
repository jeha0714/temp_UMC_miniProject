import React from "react";

interface SelectableOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectBox: React.FC<SelectableOptionProps> = ({
  label,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between items-center px-8 w-full sm:w-[1000px] h-[65px] rounded-2xl text-xl transition border-3
        hover:border-[3px] 
        ${
          selected
            ? "border-[#002F6C] text-[#002F6C] bg-[#CFD1CC]"
            : "border-transparent bg-[#CFD1CC] hover:border-[#002F6C]"
        }`}
    >
      {label}
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-bold
          ${
            selected
              ? "bg-[#002F6C] border-[#002F6C] text-white"
              : "bg-[#7e92a9] border-[#002F6C] text-[#002F6C]"
          }`}
      >
        ✓
      </div>
    </button>
  );
};

export default SelectBox;
