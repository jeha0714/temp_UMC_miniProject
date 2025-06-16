import search from "../../assets/images/search.svg";

const NoResult = ({ keyword }: { keyword: string }) => {
  return (
    <div>
      <div className="flex absolute left-[280px] top-[170px] items-center gap-2 mb-4">
        <img src={search} className="w-13 h-13" alt="검색 아이콘" />

        <p className="text-[32px] font-bold">"{keyword}" 검색결과</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-[60vh] text-center gap-[20px]">
        <p className="text-black text-[30px]">
          검색어에 해당하는 동아리가 없습니다.
          <br />
          다시 입력해주세요.
        </p>
      </div>
    </div>
  );
};

export default NoResult;
