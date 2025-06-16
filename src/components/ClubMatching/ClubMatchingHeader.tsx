import { Props } from "../../types/MatchForm";
import StepArrow from "./StepArrow";
import StepBar from "./StepBar";

const ClubMatchingHeader = ({ step, setStep }: Props) => {
  const hideArrow = step === 1;
  const hideStepSection = step === 4;

  if (step === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex justify-between items-start">
        <img
          src="/src/assets/images/SMUClub_LOGO.svg"
          alt="로고"
          className="w-[200px] ml-[180px] mb-8"
        />
      </div>

      {!hideStepSection && (
        <div className="w-full max-w-[1440px] flex items-center gap-4 px-6 sm:px-[180px] -mt-4">
          {!hideArrow && (
            <StepArrow step={step} onPrev={() => setStep(step - 1)} />
          )}
          <div className="flex-1 mt-2">
            <StepBar step={step} setStep={setStep} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubMatchingHeader;
