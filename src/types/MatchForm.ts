export type TMatchForm = {
    '어떤 방향의 경험을 기대': "GROWTH_CAREER" | "CREATIVE_EXPRESSION" | "SOCIAL_RELAXATION" | "VALUE_ORIENTED";
    '원하는 활동 방식을 선택': "REGULAR" | "FLEXIBLE" | "ANY";
    '모집 방식': "ALWAYS" | "PERIODIC" | "ANY";
};

export type TMatchResult={
    clubId: number;
    name: string;
    hashtags: string[];
    imageUrl: string;
    matchLevel: '완벽 일치' | '일부 조건 일치';
};

export type Props = {
    step: number;
    setStep:(step: number)=> void;
};

export type StepArrowProps={
    step: number;
    onPrev: ()=> void;
};
