import { useState } from "react";

import { mentorData } from "../../../public/mocks/mentoringPageData";
import { SearchFilterData } from "../../../public/mocks/mentoringPageData";

import MentoSearchBar from "./MentorSearchBar";
import Button from "../../components/button/Button";
import MentorCard from "./MentorCard";
import MentorSection from "./MentorSection";
import Pagination from "./Pagination";
import SearchFilter from "./Searchfilter";
import MentorInfoModal from "./MentorCardInfoModal";
import MentorApplyModal from "./MentorApplyModal";

import { css } from "@emotion/react";

const MentoringPage = () => {
  const itemsPerPage = 6; // 한 페이지당 보여줄 멘토카드의 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [isFilterVisible, setIsFilterVisible] = useState(false); // 검색필터 상태
  // 멘토 게시물 세부정보 모달
  const [isShowMentorModal, setIsShowMentorModal] = useState();
  const [mentorInfoToShow, setMentorInfoToShow] = useState(null);
  // 멘토 지원 모달
  const [isShowMentorApplyModal, setIsShowMentorApplyModal] = useState();

  const mentorsRepeated = [];
  for (let i = 0; i < 5; i++) {
    mentorsRepeated.push(...mentorData);
  }

  // 현재 페이지에 해당하는 데이터를 계산.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const mentorsOnCurrentPage = mentorsRepeated.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  function handleMentorInfo(mentorInfo) {
    setMentorInfoToShow(mentorInfo);
    setIsShowMentorModal(true);
  }

  function handleMentorApply() {
    setIsShowMentorApplyModal(true);
  }

  function handleDone() {
    setIsShowMentorModal(false);
    setIsShowMentorApplyModal(false);
  }

  return (
    <>
      {/** 게시물 세부 정보 모달창 */}
      {isShowMentorModal && (
        <MentorInfoModal mentorInfo={mentorInfoToShow} onDone={handleDone} />
      )}

      {isShowMentorApplyModal && <MentorApplyModal onDone={handleDone} />}

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

            <div
              css={css`
                @media (max-width: 1000px) {
                  margin-top: 24px;
                  justify-content: space-between;
                  display: flex;
                }
              `}
            >
              <div>
                {/** 멘토지원 버튼 */}
                <Button size="xl" variant="default" onClick={handleMentorApply}>
                  멘토지원
                </Button>
              </div>
              <div
                css={css`
                  @media (min-width: 1000px) {
                    display: none;
                  }
                `}
              >
                {/** 검색필터 버튼 */}
                <Button
                  size="xl"
                  variant="blue"
                  onClick={toggleFilterVisibility}
                >
                  검색필터
                </Button>
              </div>
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
                    detail={item.detail}
                    onClick={() => handleMentorInfo(item)}
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
              display: ${isFilterVisible ? "block" : "none"};
            }
          `}
        >
          <SearchFilter data={SearchFilterData} isVisible={isFilterVisible} />
        </div>
      </section>
    </>
  );
};

export default MentoringPage;
