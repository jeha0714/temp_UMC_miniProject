import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IntroButtons from "./InfoButtons";
import Accordion from "./Accordion";

const InfoMain: React.FC = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(tab || "notice");

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const notices = [
    {
      title: "공지 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      title: "공지 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      title: "공지 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      title: "공지 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      title: "공지 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];

  const questions = [
    {
      question: "등록된 동아리들의 기준이 무엇인가요?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "더 많은 동아리의 정보를 알고 싶어요!",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "동아리 정보는 어떻게 수정하나요?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "매칭 결과는 어떤 방식으로 이루어지나요?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "Lorem",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];

  return (
    <>
      <IntroButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full h-auto text-center px-50">
        {activeTab === "notice" ? (
          <Accordion items={notices} />
        ) : (
          <div className="flex flex-col justify-center gap-8">
            <Accordion items={questions} />
          </div>
        )}
      </div>
    </>
  );
};

export default InfoMain;
