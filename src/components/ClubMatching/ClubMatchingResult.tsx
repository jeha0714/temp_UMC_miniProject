import { useQuery } from "@tanstack/react-query";
import { TMatchForm, TMatchResult } from "../../types/MatchForm";
import { FetchMatchedClubs } from "../../utils/fetch";
import { Link } from "react-router-dom";

const ClubMatchingResult = ({ matchForm }: { matchForm: TMatchForm }) => {
  const { data, isLoading, error } = useQuery<TMatchResult[]>({
    queryKey: ["matchedClubs", matchForm],
    queryFn: () => FetchMatchedClubs(matchForm),
  });

  if (isLoading) return <div className="text-center py-8">로딩 중...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">에러 발생</div>;

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 leading-relaxed">
        아래는 선택하신 조건과 유사한 <br /> 동아리 목록입니다.
      </h1>

      <div className="p-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl w-full">
        {data!.map((club) => (
          <div
            key={club.clubId}
            className="bg-[#D6DBEA] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* 매칭 레벨 표시 */}
            <div className="text-sm mb-3">
              {club.matchLevel === "완벽 일치" && (
                <span className="text-green-600 font-semibold">
                  🟢 완벽 일치
                </span>
              )}
              {club.matchLevel === "일부 조건 일치" && (
                <span className="text-yellow-600 font-semibold">
                  🟡 일부 조건 일치
                </span>
              )}
            </div>

            {/* 이미지 영역 */}
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-3 overflow-hidden">
              <img
                src={club.imageUrl}
                alt={club.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 해시태그 */}
            <div className="text-xs text-gray-700 mb-2 text-left">
              {club.hashtags.map((tag, index) => (
                <span key={index} className="mr-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* 동아리명 */}
            <div className="font-bold text-xl text-left mb-auto">
              {club.name}
            </div>

            {/* 구경가기 버튼 */}
            <div className="flex justify-end mt-4">
              <Link to={`/clubintrodetail/${club.clubId}`}>
                <button className="px-4 py-2 text-sm bg-[#112868] text-white rounded-full hover:bg-[#FFD86E] transition-colors duration-300 font-medium">
                  구경가기 &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubMatchingResult;
