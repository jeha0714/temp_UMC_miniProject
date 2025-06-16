import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  categoryTitle: string;
}

const SearchBar = ({ categoryTitle }: SearchBarProps) => {
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
    <div className="w-full relative border-b-2 border-[#002F6C] px-10 py-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="동아리명"
          className="flex px-4 py-2 rounded-full bg-[#D6DBEA] border-2 border-[#002F6C] text-sm"
        />
        <button
          onClick={handleSearch}
          className="w-12 h-10 p-2 bg-[#D6DBEA] rounded-full border-2 border-[#002F6C]"
        >
          <img src="../src/assets/images/emoji_search.svg" alt="검색버튼" />
        </button>
      </div>
      <h2 className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        {categoryTitle}
      </h2>
    </div>
  );
};

export default SearchBar;
