import React from "react";
import "./Search.css";
import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="relative w-full max-w-md mx-auto searchBox">
      <input
        type="text"
        placeholder="Search for products and more..."
        className="w-full h-[45px] focus:outline-none bg-[#e5e5e5] rounded-[15px] border-none pl-[15px] pr-[50px] text-[15px]"
        style={{ marginLeft: "15px" }}
      />

      <Button
        className="!absolute top-[5px] right-[5px] z-50 !w-[35px] !min-w-[35px] h-[35px] rounded-full !bg-blue-600 hover:!bg-blue-700 flex items-center justify-center"
        style={{marginRight:"-10vh"}}
      >
        <CiSearch className="text-white text-[22px]" />
        {/* 46.09 */}
      </Button>
    </div>
  );
};

export default Search;
