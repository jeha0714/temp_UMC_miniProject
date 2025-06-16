import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { FaSearch } from "react-icons/fa";
import "react-big-calendar/lib/css/react-big-calendar.css"; // 스타일시트 가져오기
import "../assets/styles/Calendar.css";
import { umcServerNoAuth } from "../utils/axios";
import { ApiCalendarResponse } from "../types/ApiResponseType";
import {
  CalendarEvent,
  CLUB_NAME_TO_ID,
  CLUB_ID_TO_NAME,
} from "../types/CalendarPageType";

// moment 로케일라이저 설정
const localizer = momentLocalizer(moment);

function CalendarPage() {
  // 현재 날짜를 상태로 관리
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [searchQuery, setSearchQuery] = useState<number>(1);

  const fetchClubSchedule = async (clubId: number) => {
    try {
      const response = await umcServerNoAuth.get<ApiCalendarResponse>(
        `/clubs/calendar/${clubId}`
      );

      if (response.data) {
        const schedule = response.data.result;
        const newEvents: CalendarEvent[] = [];
        const clubName = CLUB_ID_TO_NAME[clubId];

        // 상반기 일정 추가
        newEvents.push({
          title: `[${clubName}] 모집 기간`,
          start: new Date(schedule.firstStart),
          end: new Date(schedule.firstEnd),
        });

        // 하반기 일정이 상반기와 다른 경우에만 추가
        if (!!schedule.secondStart && !!schedule.firstEnd) {
          newEvents.push({
            title: `[${clubName}] 모집 기간`,
            start: new Date(schedule.secondStart),
            end: new Date(schedule.secondEnd),
          });
        }

        setEvents(newEvents);
      }
    } catch (error) {
      console.error("Failed to fetch club schedule:", error);
    }
  };

  useEffect(() => {
    fetchClubSchedule(searchQuery);
  }, [searchQuery]);

  // 이전 달로 이동하는 함수
  const goToPrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // 현재 월과 년도를 표시하는 함수
  const formatMonthYear = (date: Date): string => {
    return moment(date).format("YYYY년 MM월");
  };

  // 현재 날짜에 스타일 적용
  const dayPropGetter = (date: Date) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    if (isToday) {
      return {
        className: "custom-today-highlight", // 커스텀 클래스
      };
    }

    return {};
  };

  // 날짜 변경 핸들러 추가
  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input") as HTMLInputElement;
    const searchValue = input.value.trim();

    if (searchValue) {
      const clubId = CLUB_NAME_TO_ID[searchValue];
      if (clubId) {
        setSearchQuery(clubId);
      } else {
        alert("존재하지 않는 동아리명입니다.");
      }
    }
  };

  return (
    <article className="flex flex-col items-center justify-center flex-grow w-full h-full px-40 pb-10">
      {/* 임시 article tag */}
      {/* <article className="w-[80%] h-[80%]"> */}
      <div className="flex items-center justify-between w-full px-4 py-5">
        {/* 왼쪽 빈 공간 (중앙 정렬을 위한) */}
        <div className="hidden w-1/4 xl:w-1/5 sm:w-1/4 sm:block"></div>

        {/* 월 이동 중앙 네비 */}
        <div className="flex items-center justify-center text-lg font-bold md:text-2xl sm:text-xl text-blue-950">
          <button
            onClick={goToPrevMonth}
            className="px-4 text-xl bg-transparent border-none cursor-pointer md:text-lg sm:text-base md:px-3 sm:px-2"
          >
            ❮ {/* 왼쪽 꺽쇠 이전 달 이동 */}
          </button>
          <span>{formatMonthYear(currentDate)}</span>
          <button
            onClick={goToNextMonth}
            className="px-4 text-xl bg-transparent border-none cursor-pointer md:text-lg sm:text-base md:px-3 sm:px-2"
          >
            ❯ {/* 오른쪽 꺽쇠 다음 달 이동 */}
          </button>
        </div>

        {/* 우측 검색 입력 및 버튼 */}
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-end w-1/4 xl:w-1/5 d:w-1/4"
        >
          <input
            type="text"
            placeholder="동아리명"
            className="flex-grow w-full max-w-xs min-w-0 px-3 py-1 text-sm border-2 border-blue-950 bg-slate-300 rounded-2xl text-blue-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="flex items-center justify-center flex-shrink-0 p-1 ml-1 text-sm transition border-2 border-blue-950 bg-slate-300 rounded-2xl hover:bg-indigo-700"
          >
            <FaSearch size={16} className="mx-2 size-5" color="#fed86e" />
          </button>
        </form>
      </div>

      <div className="w-full flex-1">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          views={["month"]}
          defaultView="month"
          date={currentDate}
          onNavigate={handleNavigate}
          toolbar={false}
          dayPropGetter={dayPropGetter}
        />
      </div>
    </article>
  );
}
export default CalendarPage;
