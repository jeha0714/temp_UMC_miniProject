const ClubMatchingIntro = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-8">
      <h2 className="text-xl font-semibold mb-10">동아리 매칭</h2>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 leading-relaxed">
        너무 많은 동아리, 나에게 딱 맞는 동아리가 <br /> 무엇인지 모르겠을 땐?
      </h1>
      <p className="text-base text-center text-gray-700 mb-14 leading-relaxed">
        동아리 매칭을 통해 사용자가 답변한 내용을 기반으로 <br /> 자동으로
        해당하는 동아리를 추천합니다!
      </p>
      <button
        className="px-20 py-4 bg-[#002F6C] text-white text-lg font-bold rounded-2xl hover:bg-[#FFD86E] hover:shadow-inner transition"
        onClick={onNext}
      >
        동아리 매칭 시작
      </button>
    </div>
  );
};

export default ClubMatchingIntro;
