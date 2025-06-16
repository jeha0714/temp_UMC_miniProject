import React, { useState } from "react";
import { IoMdBookmarks } from "react-icons/io";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import CardIntro from "./CardIntro";

const CardSection: React.FC = () => {
  const [modalType, setModalType] = useState<
    "club" | "matching" | "help" | null
  >(null);

  const handleCardClick = (type: "club" | "matching" | "help") => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <>
      <div className="flex justify-center gap-12 mt-10 text-[20px]">
        <div
          className="w-[160px] h-[160px] flex flex-col items-center bg-gray-200 p-5 rounded-lg gap-5 cursor-pointer hover:bg-gray-300 transition-colors"
          onClick={() => handleCardClick("club")}
        >
          <p className="font-semibold">동아리 소개</p>
          <IoMdBookmarks className="w-15 h-15 mb-2" />
        </div>

        <div
          className="w-[160px] h-[160px] flex flex-col items-center bg-gray-200 p-5 rounded-lg gap-5 cursor-pointer hover:bg-gray-300 transition-colors"
          onClick={() => handleCardClick("matching")}
        >
          <p className="font-semibold">동아리 매칭</p>
          <MdFaceRetouchingNatural className="w-15 h-15 mb-2" />
        </div>

        <div
          className="w-[160px] h-[160px] flex flex-col items-center bg-gray-200 p-5 rounded-lg gap-5 cursor-pointer hover:bg-gray-300 transition-colors"
          onClick={() => handleCardClick("help")}
        >
          <p className="font-semibold">도움말</p>
          <IoMdInformationCircleOutline className="w-15 h-15 mb-2" />
        </div>
      </div>

      {modalType && (
        <CardIntro isOpen={true} onClose={handleCloseModal} type={modalType} />
      )}
    </>
  );
};

export default CardSection;
