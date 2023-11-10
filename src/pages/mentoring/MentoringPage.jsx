import { useState } from "react";

import { mentorData } from "../../../public/mocks/mentoringPageData";
import MentoSearchBar from "./MentorSearchBar";
import Button from "../../components/button/Button";
import MentorCard from "./MentorCard";
import MentorSection from "./MentorSection";
import Pagination from "./Pagination";
import SearchFilter from "./Searchfilter";

import { css } from "@emotion/react";

const MentoringPage = () => {
  const itemsPerPage = 6; // 한 페이지당 보여줄 멘토카드의 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  const mentorsRepeated = [];
  for (let i = 0; i < 3; i++) {
    mentorsRepeated.push(...mentorData);
  }

  // 현재 페이지에 해당하는 데이터를 계산.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const mentorsOnCurrentPage = mentorsRepeated.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="flex w-full py-5 mx-auto section-margin justify-evenly max-w-screen-2xl">
      <div className="w-[70%]">
        <div
          className="flex justify-between mb-8"
          css={css`
            @media (max-width: 1000px) {
              display: block;
            }
          `}
        >
          {/** 검색창 */}
          <MentoSearchBar />

          {/** 멘토지원 버튼 */}
          <div
            css={css`
              @media (max-width: 1000px) {
                margin-top: 24px;
              }
            `}
          >
            <Button size="xl" variant="default">
              멘토지원
            </Button>
          </div>
        </div>

        <div className="">
          {/** 멘토 게시물 섹션 */}
          <MentorSection>
            <div className="flex flex-wrap justify-between">
              {mentorsOnCurrentPage.map((item) => (
                <MentorCard
                  key={item.id}
                  title={item.title}
                  duty={item.duty}
                  career={item.career}
                  job={item.job}
                  price={item.price}
                  writer={item.writer}
                  date={item.date}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={mentorsRepeated.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </MentorSection>
        </div>
      </div>

      <div
        className="w-[20%] mt-12"
        css={css`
          @media (max-width: 1000px) {
            display: none;
          }
        `}
      >
        {/** 우측 검색 필터 */}
        <SearchFilter />
      </div>
    </section>
  );
};

export default MentoringPage;
