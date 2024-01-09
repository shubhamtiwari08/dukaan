import React from "react";

const Search = () => {
  return (
    <div className=" py-[9px] px-[12px] flex items-center gap-x-[8px] w-full">
      <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704744891/search_qx2ki6.svg" alt="searchIcon" />
      <input
        type="search"
        placeholder="Search features, tutorials, etc."
        className="w-full text-[15px] leading-[22px] pb-[3px] bg-[#f2f2f2] text-[#808080] outline-none border-none placeholder-[#808080] placeholder-opacity-75 font-galano font-normal"
      />
    </div>
  );
};

export default Search;