import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

type TSearch = {
  categoryTitle?: string;
};

const SearchBar = ({ categoryTitle }: TSearch) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/clubsearch/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center my-8 gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="원하시는 동아리명 혹은 관심분야를 검색하세요!"
        className="w-[600px] h-[50px] px-4 py-3 rounded-full bg-white border-2 border-[#002F6C] text-black"
      />
      <button
        onClick={handleSearch}
        className="h-[50px] bg-white border-2 border-[#002F6C] px-4 py-2 rounded-full hover:bg-yellow-100"
      >
        <FaSearch className="text-[#002F6C]" />
      </button>
      <h2 className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        {categoryTitle}
      </h2>
    </div>
  );
};

export default SearchBar;
