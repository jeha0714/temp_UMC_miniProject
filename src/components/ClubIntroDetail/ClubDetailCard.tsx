import { useQuery } from "@tanstack/react-query";
import ImageSlider from "./ImageSlider";
import { TClubDetail } from "../../types/ClubDetail";
import { FetchClubDetail } from "../../utils/fetch";

const ClubDetailCard = ({ clubId }: { clubId: number }) => {
  const { data, isLoading, error } = useQuery<TClubDetail>({
    queryKey: ["clubDetail", clubId],
    queryFn: () => FetchClubDetail(clubId),
    enabled: !isNaN(clubId) && clubId > 0, // 클럽 ID가 유효할 때만 쿼리 실행
  });

  if (!clubId || isNaN(Number(clubId))) {
    return <div className="p-10">동아리가 없습니다.</div>;
  }

  if (isLoading) {
    return <div className="p-10">로딩 중......</div>;
  }

  if (error || !data) {
    console.log(error);
    return <div className="p-10">에러가 발생했습니다.</div>;
  }

  return (
    <div className="flex px-[200px] pt-[100px] pl-[150px] gap-[64px]">
      <ImageSlider images={data.images} />
      {/* <div className='w-[400px] bg-[#D9D9D9] h-[300px] rounded-md'>
                <img></img>
            </div> */}
      <div className="flex flex-col justify-start">
        <h3 className="text-2xl pb-2 font-bold border-b-2 border-black mb-4">
          {data!.title}
        </h3>

        <p className="text-base mb-6 leading-relaxed font-bold">
          {data!.description}
        </p>
        <ul className="space-y-2 text-sm">
          <li>모집 대상: {data.target}</li>
          <li>모집 기간: {data.duration}</li>
          <li>모집 방법: {data.method}</li>
          <li>주요 활동: {data.activity}</li>
          <li>FAQ 및 관련 링크: {data.link}</li>
        </ul>
      </div>
    </div>
  );
};

export default ClubDetailCard;
