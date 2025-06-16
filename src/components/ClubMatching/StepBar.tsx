import { Props } from "../../types/MatchForm";

const StepBar = ({ step }: Props) => {
  const percent = (step / 3) * 100;

  return (
    <div className="w-full px-6 mt-2 mb-6">
      <div className="w-full h-2 bg-[#7e92a9] rounded-full">
        <div
          className="h-2 bg-[#002F6C] rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default StepBar;
