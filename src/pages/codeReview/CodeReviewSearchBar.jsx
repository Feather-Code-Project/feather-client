import searchIcon from "../../../public/icons/search.svg";
import { css } from "@emotion/react";

const CodeReviewSearchBar = () => {
  return (
    <div
      className="flex w-[80%] h-[50px] mr-10 border-2 rounded-full px-5 shadow-md"
      css={css`
        @media (max-width: 1000px) {
          width: 100%;
          margin: 0 auto;
        }
      `}
    >
      <input type="text" className="w-full h-full outline-none" />
      <button className="ml-2">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default CodeReviewSearchBar;
