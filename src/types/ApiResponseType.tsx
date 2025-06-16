import { ClubSchedule } from "./CalendarPageType";

export type CategoryCardProps = {
  category: string;
  hash: string;
  clubName: string;
  imageUrl?: string;
};

export interface Club {
  clubId: number;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
  hashtags: string[];
}

export type ApiResponseClub = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: Club[];
};

export type ApiCalendarResponse = {
  success: boolean;
  code: string;
  message: string;
  result: ClubSchedule;
};
