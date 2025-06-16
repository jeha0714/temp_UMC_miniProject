import { StepArrowProps } from "../../types/MatchForm";

const StepArrow = ({ step, onPrev }: StepArrowProps) => {
  return (
    <button onClick={onPrev} className="ml-6" disabled={step <= 0}>
      <span className="text-[#002F6C] text-5xl hover:text-[#FFD86E] transition font-bold">
        ←
      </span>
    </button>
  );
};

export default StepArrow;
