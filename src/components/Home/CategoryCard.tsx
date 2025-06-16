import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  category: string;
  hash: string;
  clubName: string;
  imageUrl: string;
  clubId: number;
}

const CategoryCard = ({
  category,
  hash,
  clubName,
  imageUrl,
  clubId,
}: CategoryCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/clubintrodetail/${clubId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[180px] h-auto bg-white bg-opacity-30 rounded-lg shadow-md px-3 py-3 flex flex-col justify-between items-center backdrop-blur-sm cursor-pointer hover:bg-opacity-40 transition-all"
    >
      <p className="text-[16px] font-semibold mb-2">{category}</p>
      <img
        src={imageUrl || "default-image-url.jpg"}
        alt="clubImg"
        className="w-full h-[100px] py-2 object-cover rounded-md"
      />
      <p className="font-semibold text-[18px] text-gray-700 w-full text-center">
        <span className="block w-full truncate">{clubName}</span>
      </p>
      <p className="text-[14px] mt-3 bg-blue-950 rounded-2xl px-2 text-amber-200">
        {hash}
      </p>
    </div>
  );
};

export default CategoryCard;
