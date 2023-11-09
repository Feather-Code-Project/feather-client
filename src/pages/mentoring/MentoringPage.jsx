import { mentorData } from "../../../public/mocks/mentoringPageData";
import MentoSearchBar from "./MentorSearchBar";
import Button from "../../components/button/Button";
import MentorCard from "./MentorCard";
import MentorSection from "./MentorSection";
import SearchFilter from "./Searchfilter";

import { css } from "@emotion/react";

const MentoringPage = () => {
  return (
    <section className="flex section-margin mx-auto w-full py-5 justify-evenly max-w-screen-2xl">
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
              {mentorData.map((item) => (
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
