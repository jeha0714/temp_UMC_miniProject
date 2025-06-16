import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClubMatchingIntro from "../components/ClubMatching/ClubMatchingIntro";
import ClubMatchingExperience from "../components/ClubMatching/ClubMatchingExperience";
import ClubMatchingActivityFormat from "../components/ClubMatching/ClubMatchingActivityFormat";
import ClubMatchingRecruitMethod from "../components/ClubMatching/ClubMatchingRecruitMethod";
import ClubMatchingResult from "../components/ClubMatching/ClubMatchingResult";
import ClubMatchingHeader from "../components/ClubMatching/ClubMatchingHeader";
import { TMatchForm } from "../types/MatchForm";

const ClubMatching = () => {
  const navigate = useNavigate();
  const { step: stepParam } = useParams();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (stepParam) {
      const stepNumber = parseInt(stepParam);
      if (!isNaN(stepNumber) && stepNumber >= 0 && stepNumber <= 4) {
        setStep(stepNumber);
      }
    }
  }, [stepParam]);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
    if (newStep > 0) {
      navigate(`/clubmatching/${newStep}`);
    } else {
      navigate("/clubmatching");
    }
  };

  const [matchForm, setMatchForm] = useState<TMatchForm>({
    "어떤 방향의 경험을 기대": "GROWTH_CAREER",
    "원하는 활동 방식을 선택": "REGULAR",
    "모집 방식": "ALWAYS",
  });

  return (
    <div className="w-full h-full">
      <ClubMatchingHeader step={step} setStep={handleStepChange} />
      {step === 0 && <ClubMatchingIntro onNext={() => handleStepChange(1)} />}
      {step === 1 && (
        <ClubMatchingExperience
          onNext={() => handleStepChange(2)}
          setFormValue={(value) =>
            setMatchForm((prev) => ({
              ...prev,
              "어떤 방향의 경험을 기대": value,
            }))
          }
        />
      )}
      {step === 2 && (
        <ClubMatchingActivityFormat
          onNext={() => handleStepChange(3)}
          setFormValue={(value) =>
            setMatchForm((prev) => ({
              ...prev,
              "원하는 활동 방식을 선택": value,
            }))
          }
        />
      )}
      {step === 3 && (
        <ClubMatchingRecruitMethod
          onNext={() => handleStepChange(4)}
          setFormValue={(value) =>
            setMatchForm((prev) => ({
              ...prev,
              "모집 방식": value,
            }))
          }
        />
      )}
      {step === 4 && <ClubMatchingResult matchForm={matchForm} />}
    </div>
  );
};

export default ClubMatching;
