export type ClubSchedule = {
  club_id: number;
  name: string;
  firstStart: string;
  firstEnd: string;
  secondStart: string;
  secondEnd: string;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
};

export const CLUB_NAME_TO_ID: { [key: string]: number } = {
  굿네이버스: 1,
  가온누리: 1,
  상냥행: 2,
  상명또래상담: 3,
  에듀플릿: 4,
  이니로: 5,
  체인지: 6,
  MOMENTUM: 7,
  모멘텀: 7,
  UMC: 8,
  맹가미: 9,
  발틱: 10,
  소리마을: 11,
  얘놀: 12,
  "어우러짐 흥": 13,
  자하포토: 14,
  토네이도: 15,
  프리에: 16,
  허밍: 17,
  "Groovin'187": 18,
  그루빈187: 18,
  자하랑: 19,
  테슬라: 20,
  BUCKS: 21,
  벅스: 21,
  IEMU11: 22,
  WINNER: 23,
  위너: 23,
  "S.W.E.A.T": 24,
  "S.U.V": 25,
  CCC: 26,
  IVF: 27,
};

// ID로 동아리 이름을 찾기 위한 역방향 매핑
export const CLUB_ID_TO_NAME: { [key: number]: string } = {
  1: "가온누리",
  2: "상냥행",
  3: "상명또래상담",
  4: "에듀플릿",
  5: "이니로",
  6: "체인지",
  7: "모멘텀",
  8: "UMC",
  9: "맹가미",
  10: "발틱",
  11: "소리마을",
  12: "얘놀",
  13: "어우러짐 흥",
  14: "자하포토",
  15: "토네이도",
  16: "프리에",
  17: "허밍",
  18: "그루빈187",
  19: "자하랑",
  20: "테슬라",
  21: "벅스",
  22: "IEMU11",
  23: "위너",
  24: "S.W.E.A.T",
  25: "S.U.V",
  26: "CCC",
  27: "IVF",
};
