import React from 'react';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const IntroButtons: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center text-[18px] font-bold border-2 mt-15">
      <button
        className={`px-8 py-2 ${activeTab === 'notice' ? 'bg-black text-white' : 'bg-white text-black'}`}
        onClick={() => setActiveTab('notice')}
      >
        공지사항
      </button>
      <button
        className={`px-8 py-2 ${activeTab === 'qna' ? 'bg-black text-white' : 'bg-white text-black'}`}
        onClick={() => setActiveTab('qna')}
      >
        자주 묻는 질문
      </button>
    </div>
  );
};

export default IntroButtons; 