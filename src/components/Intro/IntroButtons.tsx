import React from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const IntroButtons: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center text-[18px] font-bold border-2">
      <button
        className={`px-8 py-2 ${
          activeTab === 'intro' ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setActiveTab('introWeb')}
      >
        소개
      </button>
      <button
        className={`px-8 py-2 ${
          activeTab === 'guide' ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setActiveTab('guide')}
      >
        이용안내
      </button>
    </div>
  );
};

export default IntroButtons;
