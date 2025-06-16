// ClubListPage.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/ClubList/Card";
import SearchBar from "../components/ClubList/SearchBar";
import SideBar from "../components/SideBar";
import { umcServerNoAuth } from "../utils/axios";
import { TClub, TClubCategory } from "../types/club";

interface SearchResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: TClub[];
}

const ClubSearchPage = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [clubs, setClubs] = useState<TClub[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchClubs = async () => {
      if (!keyword) {
        setClubs([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await umcServerNoAuth.get<SearchResponse>(
          `/clubs/search?keyword=${encodeURIComponent(keyword)}`
        );

        console.log(response);

        if (response.data.isSuccess) {
          setClubs(response.data.result);
        } else {
          throw new Error(response.data.message);
        }
      } catch (err) {
        if (
          err instanceof Error &&
          "response" in err &&
          (err as any).response?.status === 404
        ) {
          setClubs([]); // 검색 결과 없음을 나타내기 위해 빈 배열 설정
        } else {
          setError(
            `검색 중 오류가 발생했습니다. (${
              err instanceof Error ? err.message : "알 수 없는 오류"
            })`
          );
        }
      } finally {
        setLoading(false);
      }
    };

    searchClubs();
  }, [keyword]);

  const handleCategoryChange = (category: TClubCategory) => {
    navigate(`/clubintro/${category.toLowerCase()}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="text-red-500">{error}</div>
        <button
          onClick={() => navigate("/clubsearch")}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          검색 초기화
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <SearchBar
        categoryTitle={keyword ? `"${keyword}" 검색 결과` : "동아리 검색"}
      />

      {/* 본문: 사이드바 + 카드 리스트 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 사이드바 */}
        <div>
          <SideBar onCategorySelect={handleCategoryChange} />
        </div>

        <div className="flex-1 pt-10 overflow-y-auto">
          {clubs.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2 xl:grid-cols-3">
              {clubs.map((club) => (
                <div
                  key={club.clubId}
                  className="flex items-center justify-center"
                >
                  <Card
                    imageUrl={club.imageUrl}
                    tags={club.hashtags}
                    clubName={club.name}
                    description={club.description}
                    clubId={club.clubId}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-gray-500">
              <div className="text-2xl font-bold">
                {keyword
                  ? `"${keyword}"와(과) 일치하는 동아리가 없습니다.`
                  : "검색어를 입력해주세요."}
              </div>
              <div className="text-sm text-gray-400">
                다른 검색어로 다시 시도해보세요.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClubSearchPage;
