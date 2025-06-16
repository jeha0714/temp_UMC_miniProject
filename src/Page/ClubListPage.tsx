import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/ClubList/Card";
import SearchBar from "../components/ClubList/SearchBar";
import SideBar from "../components/SideBar";
import { getClubsByCategory, searchClubs } from "../utils/fetch";
import { TClub, TClubCategory } from "../types/club";

// 카테고리 영어 -> 한글 매핑
const categoryNameMap: Record<TClubCategory, string> = {
  STUDY: "학술",
  ART: "예술",
  SPORT: "스포츠",
  RELIGION: "종교",
};

// URL 파라미터 -> 카테고리 매핑
const urlToCategoryMap: Record<string, TClubCategory> = {
  academy: "STUDY",
  arts: "ART",
  sports: "SPORT",
  spirit: "RELIGION",
};

const ClubListPage = () => {
  const { tab } = useParams();
  const [clubs, setClubs] = useState<TClub[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TClubCategory>(
    tab ? urlToCategoryMap[tab] || "STUDY" : "STUDY"
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (tab && urlToCategoryMap[tab]) {
      setSelectedCategory(urlToCategoryMap[tab]);
    }
  }, [tab]);

  useEffect(() => {
    const loadClubs = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Fetching clubs for category:", selectedCategory);

        let data: TClub[];
        if (searchTerm) {
          console.log("Searching clubs with term:", searchTerm);
          data = await searchClubs(searchTerm);
        } else {
          data = await getClubsByCategory(selectedCategory);
        }

        // console.log("Received clubs data:", data);
        setClubs(data);
      } catch (err) {
        console.error("Detailed error:", err);
        setError("동아리 정보를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    // 디바운스 처리
    const debounceTimer = setTimeout(() => {
      loadClubs();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category: TClubCategory) => {
    setSelectedCategory(category);
    setSearchTerm("");
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
      <div className="flex items-center justify-center w-full h-full text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <SearchBar categoryTitle={categoryNameMap[selectedCategory]} />

      {/* 본문: 사이드바 + 카드 리스트 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 사이드바 */}
        <div>
          <SideBar onCategorySelect={handleCategoryChange} />
        </div>

        <div className="flex-1 pt-10 overflow-y-auto">
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
        </div>
      </div>
    </div>
  );
};

export default ClubListPage;
