import React, { useState, useEffect } from "react";
import IntroButtons from "./IntroButtons";
import CardSection from "./CardSection";
import { useParams } from "react-router-dom";

const IntroMain: React.FC = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(tab || "intro");

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <>
      <IntroButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full h-auto text-center">
        <div className="flex flex-col gap-3">
          {activeTab === "intro" ? (
            <div className="px-32 flex flex-col gap-8">
              <h2 className="text-[24px] font-bold">[SMUclub]이 무엇인가요?</h2>
              <p className="text-[18px] text-left">
                SMUclub은 상명대학교 학생들을 위한{" "}
                <strong>교내 동아리 통합 소개 플랫폼</strong>입니다.
                <br />
                신입생과 재학생들이{" "}
                <strong>쉽고 빠르게 관심 있는 동아리를 탐색</strong>하고,
                <br />
                동아리 임원진은 <strong>공정한 기회를 가지고 홍보</strong>할 수
                있도록 돕기 위해 제작되었습니다.
                <br />
                <br />
                기존의 무분별한 홍보 게시물과 인기 위주의 노출 구조에서 벗어나,
                카테고리별 정리와 동아리 매칭 기능을 통해 누구나 간편하게 정보를
                얻고 가입할 수 있는 환경을 제공합니다.
                <br />
                <br />
                SMUclub과 함께, 당신에게 딱 맞는 동아리를 찾아보세요!
              </p>
            </div>
          ) : (
            <div className="px-32 flex flex-col justify-center gap-2">
              <p className="text-[18px]">
                다음은 웹사이트 이용법이 어려운 분들을 위한 가이드입니다.
                <br />
                참고하여 자신에게 맞는 동아리를 찾아보세요!
              </p>
              <CardSection />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IntroMain;
