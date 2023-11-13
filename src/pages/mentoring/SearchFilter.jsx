import { useState } from "react";
import { css } from "@emotion/react";

const SearchFilter = ({ data, isVisible }) => {
  const [activeItems, setActiveItems] = useState([]);

  const handleItemClick = (id) => {
    setActiveItems((prevItems) => {
      const isItemActive = prevItems.includes(id);

      if (isItemActive) {
        // 이미 활성화된 아이템을 클릭하면 해당 아이템을 비활성화
        return prevItems.filter((item) => item !== id);
      } else {
        // 활성화되지 않은 아이템을 클릭하면 해당 아이템을 활성화
        return [...prevItems, id];
      }
    });
  };

  return (
    <div
      className={`h-auto p-4 bg-white shadow-md ${
        isVisible ? "h-screen mt-[70px] w-[25%] fixed right-0 top-0" : "block"
      }`}
    >
      <div className="p-4 mb-2">
        <h2 className="text-xl font-bold">검색필터</h2>
      </div>
      {data.map((item) => (
        <div key={item.id} className="">
          <div
            onClick={() => handleItemClick(item.id)}
            css={css`
              cursor: pointer;
              background-color: ${activeItems.includes(item.id)
                ? "#f0f0f0"
                : "transparent"};
              padding: 8px;
              border-radius: 4px;
            `}
          >
            {item.title}
          </div>
          {activeItems.includes(item.id) && (
            <ul className="ml-4">
              {item.list.map((subItem) => (
                <li key={subItem} className="mb-2">
                  <input type="checkbox" className="mr-4" />
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchFilter;
