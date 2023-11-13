import { css } from "@emotion/react";
import { useState } from "react";

import rightLongArrowIcon from "../../../public/icons/rightLongArrow.svg";
import leftLongArrowIcon from "../../../public/icons/leftLongArrow.svg";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [maxPageNumbersToShow, setMaxPageNumbersToShow] = useState(
    window.innerWidth <= 560 ? 1 : window.innerWidth <= 740 ? 3 : 5
  );

  // 화면 크기가 변경될 때마다 maxPageNumbersToShow 값을 업데이트
  const updateMaxPageNumbersToShow = () => {
    if (window.innerWidth <= 560) {
      setMaxPageNumbersToShow(1);
    } else if (window.innerWidth <= 740) {
      setMaxPageNumbersToShow(3);
    } else {
      setMaxPageNumbersToShow(5);
    }
  };

  // 화면 크기가 변경될 때마다 maxPageNumbersToShow 값을 업데이트
  window.addEventListener("resize", updateMaxPageNumbersToShow);

  // 페이지 번호 목록
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // 현재 페이지 번호 주변의 페이지 번호만 가져오기
  const getPageNumbersToShow = () => {
    const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 1);
    const start =
      currentPage <= halfMaxPageNumbersToShow
        ? 0
        : Math.min(
            currentPage - halfMaxPageNumbersToShow,
            totalPages - maxPageNumbersToShow
          );
    return pageNumbers.slice(start, start + maxPageNumbersToShow);
  };

  const pageNumbersToShow = getPageNumbersToShow();

  return (
    <ul className="flex space-x-4">
      <li>
        <button
          css={buttonStyles(currentPage === 1)}
          onClick={() => {
            if (currentPage > 1) {
              onPageChange(currentPage - 1);
            }
          }}
          disabled={currentPage === 1}
        >
          <img src={leftLongArrowIcon} className="w-4 h-6" />
        </button>
      </li>
      {pageNumbersToShow.map((number) => (
        <li key={number}>
          <button
            css={buttonStyles(currentPage === number)}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          css={buttonStyles(currentPage === totalPages)}
          onClick={() => {
            if (currentPage < totalPages) {
              onPageChange(currentPage + 1);
            }
          }}
          disabled={currentPage === totalPages}
        >
          <img src={rightLongArrowIcon} className="w-4 h-6" />
        </button>
      </li>
    </ul>
  );
};

const buttonStyles = (isActive) => css`
  background-color: ${isActive ? "#0466C8" : "#f6f8fa"};
  color: ${isActive ? "#fff" : "#333"};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: ${isActive ? "pointer" : "not-allowed"};
  transition: background-color 0.3s ease;
  // white-space: nowrap;

  &:hover {
    background-color: ${isActive ? "#f6f8fa" : "#d5dbdb"};
  }

  &:disabled {
    background-color: #fafafa;
  }
`;

export default Pagination;
