type TSearch={
    categoryTitle: string;
};

const SearchBar=({categoryTitle}: TSearch)=>{
    return(
        <div className="w-full relative border-b-2 border-[#002F6C] px-10 py-4">
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="동아리명"
                    className="px-4 py-2 rounded-full bg-[#D6DBEA] border-2 border-[#002F6C] text-sm"
                />
                <button className="w-12 h-10 p-2 bg-[#D6DBEA] rounded-full border-2 border-[#002F6C]">
                    <img src="/emoji_search.svg" alt="검색버튼"/>
                </button>
            </div>
            <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">{categoryTitle}</h2>
        </div>
    );
};

export default SearchBar;
