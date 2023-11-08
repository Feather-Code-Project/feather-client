import { useState } from "react";

const SearchFilter = () => {
  const [openedMenu, setOpenedMenu] = useState(null);

  const handleMenuToggle = (menu) => {
    if (openedMenu === menu) {
      setOpenedMenu(null);
    } else {
      setOpenedMenu(menu);
    }
  };

  return (
    <div className="h-auto p-4 shadow-md bg-white">
      <div className="mb-2 p-4">
        <h2 className="text-xl font-bold">검색필터</h2>
      </div>
      <ul className="space-y-2">
        <li className="group cursor-pointer">
          <div
            onClick={() => handleMenuToggle("경력별")}
            className="flex items-center justify-between p-3 rounded-md hover:bg-blue-gray-100"
          >
            <span className="flex items-center space-x-2">
              <span>{">"}</span>
              <span className="text-blue-gray-800">경력별</span>
            </span>
          </div>
          {openedMenu === "경력별" && (
            <ul className="pl-5 space-y-2">
              <li>주니어</li>
              <li>미들</li>
              <li>시니어</li>
            </ul>
          )}
        </li>
        <li className="group cursor-pointer">
          <div
            onClick={() => handleMenuToggle("직무별")}
            className="flex items-center justify-between p-3 rounded-md hover:bg-blue-gray-100"
          >
            <span className="flex items-center space-x-2">
              <span>{">"}</span>
              <span className="text-blue-gray-800">직무별</span>
            </span>
          </div>
          {openedMenu === "직무별" && (
            <ul className="pl-5 space-y-2">
              <li>프론트엔드</li>
              <li>백엔드</li>
              <li>풀스택</li>
            </ul>
          )}
        </li>
        <li className="group cursor-pointer">
          <div
            onClick={() => handleMenuToggle("가격별")}
            className="flex items-center justify-between p-3 rounded-md hover:bg-blue-gray-100"
          >
            <span className="flex items-center space-x-2">
              <span>{">"}</span>
              <span className="text-blue-gray-800">가격별</span>
            </span>
          </div>
          {openedMenu === "가격별" && (
            <ul className="pl-5 space-y-2">
              <li>시간당 10,000 ~ 20,000</li>
              <li>시간당 20,000 ~ 30,000</li>
              <li>시간당 30,000 ~ 40,000</li>
              <li>시간당 40,000 ~ 50,000</li>
              <li>시간당 50,000 ~ 60,000</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SearchFilter;
