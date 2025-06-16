import { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import { TMatchForm } from "../../types/MatchForm";
// import ClubMatchingHeader from "../components/ClubMatchingHeader";

const experienceOptions = [
  { label: "자기 성장 & 진로", value: "GROWTH_CAREER" },
  { label: "창작 & 표현", value: "CREATIVE_EXPRESSION" },
  { label: "교류 & 여가", value: "SOCIAL_RELAXATION" },
  { label: "사회 & 가치 활동", value: "VALUE_ORIENTED" },
];

type Props = {
  onNext: () => void;
  setFormValue: (value: TMatchForm["어떤 방향의 경험을 기대"]) => void;
};

const ClubMatchingExperience = ({ onNext, setFormValue }: Props) => {
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
      setFormValue(selected as TMatchForm["어떤 방향의 경험을 기대"]);
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
        동아리 활동에서 어떤 방향의 경험을 기대하시나요?
      </h1>

      {experienceOptions.map(({ label, value }) => (
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

export default ClubMatchingExperience;
