import React from "react";
import ButtonBox2 from "./ClubList/ButtonBox2";
import { TClubCategory } from "../types/club";
import emojiEdu from "../assets/images/emoji_edu.svg";
import emojiArt from "../assets/images/emoji_art.svg";
import emojiSports from "../assets/images/emoji_sports.svg";
import emojiChurch from "../assets/images/emoji_church.svg";

type TSideBarProps = {
  onCategorySelect?: (category: TClubCategory) => void;
};

const categoryMap: Record<string, TClubCategory> = {
  학술: "STUDY",
  예술: "ART",
  스포츠: "SPORT",
  종교: "RELIGION",
};

const SideBar = ({ onCategorySelect }: TSideBarProps) => {
  const handleCategoryClick = (label: string) => {
    const category = categoryMap[label];
    if (category && onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className="w-[260px] h-full flex gap-5 border-r-[2px] border-[#002F6C]">
      <div className="flex flex-col w-[105px] gap-[17px] mt-[24px] ml-[130px]">
        <ButtonBox2
          iconSrc={emojiEdu}
          label="학술"
          onClick={() => handleCategoryClick("학술")}
        />
        <ButtonBox2
          iconSrc={emojiArt}
          label="예술"
          iconWidth={50}
          iconHeight={40}
          onClick={() => handleCategoryClick("예술")}
        />
        <ButtonBox2
          iconSrc={emojiSports}
          label="스포츠"
          onClick={() => handleCategoryClick("스포츠")}
        />
        <ButtonBox2
          iconSrc={emojiChurch}
          label="종교"
          iconWidth={35}
          iconHeight={35}
          onClick={() => handleCategoryClick("종교")}
        />
      </div>
    </div>
  );
};

export default SideBar;
