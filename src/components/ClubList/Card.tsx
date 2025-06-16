import { useNavigate } from "react-router-dom";

// interface CardProps {
//     imageUrl?: string;
//     tags: string[];
//     clubName: string;
//     description: string;
// }

// const Card: React.FC<CardProps> = ({
//     imageUrl,
//     tags,
//     clubName,
//     description,
// }) => {
//     return (
//         <div className="w-[220px] h-[220px] bg-[#002F6C33] text-black rounded-2xl p-3 relative top-[50px] left-[126px] justify-between border-2 border-transparent hover:border-[#002F6C] shadow-inner">
//             {/* 썸네일 이미지 */}
//             {imageUrl && (
//                 <img
//                     src={imageUrl}
//                     alt="동아리 썸네일"
//                     className="absolute top-5 left-5 w-[90px] h-[90px] object-cover "
//                 />
//             )}

//             {/* 태그
//             <span className="absolute top-5 right-9 gap-10">
//                 {tags.map((tag, index) => (
//                     <button
//                         key={index}
//                         className="bg-[#FFD966] text-black text-[18px] font-semibold rounded-full px-3 py-1 "
//                     >
//                         #{tag}
//                     </button>
//                 ))}
//             </span> */}
//             {/* 태그 */}
//             <div className="absolute top-5 right-3 flex flex-col justify-start items-end w-[70px] h-[93px] gap-[9px]">
//                 {tags.map((tag, index) => (
//                     <button
//                         key={index}
//                         className="bg-[#FFD966] text-black text-[14px] font-semibold rounded-full px-2 py-1 whitespace-nowrap"
//                     >
//                         #{tag}
//                     </button>
//                 ))}
//             </div>

//             {/* 제목 & 설명 */}
//             <div className="absolute mt-auto gap-[5px] top-35 left-5">
//                 <p className="text-black font-bold text-[24px]">{clubName}</p>
//                 <p className="text-black text-[14px] mt-1">{description}</p>
//             </div>
//         </div>
//     );
// };

// export default Card;

interface CardProps {
  imageUrl?: string;
  tags: string[];
  clubName: string;
  description: string;
  clubId: number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  tags,
  clubName,
  description,
  clubId,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/clubintrodetail/${clubId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[320px] h-[400px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      {/* 이미지 영역 */}
      <div className="w-full h-[200px] relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="동아리 썸네일"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">이미지 없음</span>
          </div>
        )}
      </div>

      {/* 태그 영역 */}
      <div className="px-4 py-3 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#FFD966] text-black text-sm font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 동아리 정보 영역 */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {clubName}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
