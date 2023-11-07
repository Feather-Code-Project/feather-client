import PropTypes from "prop-types";
import searchIcon from "../../../public/icons/search.svg";
import { useState } from "react";

const SearchBar = (props) => {
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState("ALL");

  const menuItems = ["자유게시판", "스터디", "Q&A"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowList(false);
  };

  return (
    <div className="flex gap-5">
      <div className="grid ml-auto items-center relative">
        <label
          className={`grid w-24 h-[50px] border-2 ${
            showList ? "rounded-t-lg" : "rounded-lg"
          } shadow-md`}
          onClick={() => setShowList((prev) => !prev)}
        >
          <button className="justify-self-center outline-none font-semibold text-sm">
            {selectedItem}
            {showList ? " ▲" : " ▼"}
          </button>
        </label>
        {showList && (
          <div className="w-24 text-center absolute mt-[200px] border-2 border-blue-gray rounded-b-xl bg-white font-semibold">
            {menuItems.map((item) => (
              <div
                key={item}
                className={`hover:bg-slate-100 h-[50px] border-b-2 grid place-items-center cursor-pointer ${
                  selectedItem === item ? "bg-slate-100" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-5 w-[1000px] h-[50px] border-2 rounded-full px-5 items-center shadow-md">
        <input
          type="text"
          placeholder="궁금하신 모든 것을 여기에 적어주세요!"
          className="w-full h-full outline-none"
        />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
