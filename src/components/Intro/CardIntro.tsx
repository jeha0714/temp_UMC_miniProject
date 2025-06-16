import React from "react";
// import { IoMdBookmarks } from "react-icons/io";
// import { MdFaceRetouchingNatural } from "react-icons/md";
// import { IoMdInformationCircleOutline } from "react-icons/io";

interface CardIntroProps {
  isOpen: boolean;
  onClose: () => void;
  type: "club" | "matching" | "help";
}

const CardIntro: React.FC<CardIntroProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    club: {
      title: "동아리 소개",
      description:
        "상명대학교의 다양한 중앙 동아리를 카테고리별로 탐색해보세요.<br/>학술, 예술, 종교 등 다양한 분야의 동아리 정보를 확인할 수 있습니다.",
    },
    matching: {
      title: "동아리 매칭",
      description:
        "관심사와 희망 활동을 입력하면 당신에게 맞는 동아리를 추천해드립니다.<br/>새로운 경험과 친구를 만날 수 있는 기회를 놓치지 마세요!",
    },
    help: {
      title: "도움말",
      description:
        "SMUclub 이용 방법에 대한 자세한 안내를 제공합니다.<br/>자주 묻는 질문과 공지사항을 통해 궁금한 점을 해결하세요.",
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-200 bg-opacity-40">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{content[type].title}</h2>
        </div>
        <p
          className="text-gray-600 mb-6 text-left"
          dangerouslySetInnerHTML={{ __html: content[type].description }}
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardIntro;
