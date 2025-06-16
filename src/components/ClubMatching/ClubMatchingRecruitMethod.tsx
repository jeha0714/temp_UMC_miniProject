import { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { TMatchForm } from "../../types/MatchForm";
// import ClubMatchingHeader from "../components/ClubMatchingHeader";

const recruitOptions = [
  { label: "상시 모집", value: "ALWAYS" },
  { label: "기간 모집", value: "PERIODIC" },
  { label: "상관없음", value: "ANY" },
];

type RecruitProps = {
  onNext: () => void;
  setFormValue: (value: TMatchForm["모집 방식"]) => void;
};

const ClubMatchingRecruitMethod = ({ onNext, setFormValue }: RecruitProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const toggleOption = (value: string) => {
    setSelected((prev) => (prev === value ? null : value));
  };

  const handleNext = () => {
    if (!selected) {
      setShowError(true);
      setHasSubmit(true);
    } else {
      setShowError(false);
      setFormValue(selected as TMatchForm["모집 방식"]);
      console.log("선택된 옵션:", selected);
      onNext();
    }
  };

  useEffect(() => {
    if (!hasSubmit) return;
    setShowError(!selected);
  }, [selected, hasSubmit]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      {/* <ClubMatchingHeader/> */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 leading-relaxed">
        선호하는 모집 방식을 선택해주세요.
      </h1>

      {recruitOptions.map(({ label, value }) => (
        <SelectBox
          key={value}
          label={label}
          selected={selected === value}
          onClick={() => toggleOption(value)}
        />
      ))}

      <div className="h-5 mt-2">
        {showError && (
          <p className="text-red-500 text-sm font-medium">
            항목을 선택해주세요.
          </p>
        )}
      </div>

      <button
        className="px-6 py-4 bg-[#002F6C] text-white font-bold rounded-2xl hover:bg-[#FFD86E] hover:shadow-inner transition"
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
};

export default ClubMatchingRecruitMethod;
