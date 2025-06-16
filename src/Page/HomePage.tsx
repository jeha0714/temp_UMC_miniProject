import React, { useState, useEffect } from "react";
import smu from "../assets/images/smu.svg"; // SVG를 경로로 불러오기
import star from "../assets/images/star.svg"; // SVG를 경로로 불러오기
import SearchBar from "../components/Home/SearchBar"; // SearchBar 컴포넌트 import
import CategoryCard from "../components/Home/CategoryCard"; // CategoryCard 컴포넌트 import
import { Club, ApiResponseClub } from "../types/ApiResponseType"; // ApiResponseType import
// @ts-ignore
import "@fontsource/gugi"; // Gugi 폰트 import해야하는데 ts-ignore로 무시해야해서 일단 추가해놨어요
import { umcServerNoAuth } from "../utils/axios";

const HomePage: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await umcServerNoAuth.get<ApiResponseClub>(`/`); // 실제 API 주소로 변경
        // console.log(response.data);
        if (response.data.isSuccess) {
          setClubs(response.data.result);
        }
      } catch (error) {
        console.error("Error fetching clubs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClubs();
  }, []);

  return (
    <div
      className="w-full h-[75vh] bg-no-repeat bg-center bg-cover flex-grow 
        flex flex-col items-center justify-center "
      style={{ backgroundImage: `url(${smu})` }}
    >
      <p
        className="text-white text-[36px]"
        style={{
          WebkitTextStroke: "0.7px black", // 글자 테두리
          fontFamily: "Gugi, sans-serif", // Gugi 폰트 적용
          fontWeight: "extra-bold",
        }}
      >
        나에게 <span className="text-yellow-300">딱 맞는</span> 상명대학교
        동아리는?
      </p>

      <SearchBar />

      <div>
        <div className="flex items-center gap-1">
          <img src={star} alt="Random 추천 동아리" className="w-8" />
          <p className="text-[22px] font-bold py-4 text-blue-950">
            랜덤 추천 동아리
          </p>
        </div>
        <div className="flex gap-4">
          {isLoading ? (
            <p>로딩 중...</p>
          ) : (
            clubs.map((club) => (
              <CategoryCard
                key={club.clubId}
                category={club.category}
                hash={club.hashtags?.[0] || ""}
                clubName={club.name}
                imageUrl={club.imageUrl}
                clubId={club.clubId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
