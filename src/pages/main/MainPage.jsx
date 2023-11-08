import CodeReviewCard from "../../components/Card/CodeReviewCard";
import CodeReviewSection from "./CodeReviewSection";
import CommunitySection from "./CommunitySection";
import SearchBar from "./SearchBar";

import {
  codeReviewData,
  sideListData,
} from "../../../public/mocks/mainPageData";
import { freeBoardData } from "../../../public/mocks/mainPageData";
import CommunityList from "./CommunityList";
import SideListCard from "../../components/Card/SideListCard";

import fireIcon from "../../../public/icons/fire.svg";

import { css } from "@emotion/react"

const MainPage = (props) => {
  return (
    <section className="flex section-margin py-5 w-full justify-center mx-auto">
      <div className="grid gap-5 w-[70%]"
        css={css`@media (max-width: 1300px) {
          width: 80%; /* 화면 너비가 1300px 이하일 때 너비 80%로 증가*/}`}>

        {/** 검색창 */}
        <SearchBar />

        {/** 코드 리뷰 */}
        <CodeReviewSection>
          <div className="flex justify-between">
            {/* TODO: 메인페이지에 표시될 카드 3개 필터링 어떻게 할지 */}
            {codeReviewData
            .filter((item) => item.id <= 3)
            .map((item) => (
              <CodeReviewCard
                key={item.id}
                title={item.title}
                tag={item.tag}
                text={item.text}
                writer={item.writer}
                liked={item.liked}
                comment={item.comment}
              />
            ))}
          </div>
        </CodeReviewSection>

        {/** 커뮤니티 섹션 */}
        <div className="flex justify-between w-full p-6 border-2 rounded-xl shadow-md">
          <CommunitySection title="자유게시판">
            {freeBoardData.map((item) => (
              <>
                <CommunityList
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  writer={item.writer}
                  date={item.date}
                  viewed={item.viewed}
                  comment={item.comment}
                />
                <div className="w-full h-[1px] bg-[#A1A1A1]"></div>
              </>
            ))}
          </CommunitySection>
          <CommunitySection title="스터디">
            {freeBoardData.map((item) => (
              <>
                <CommunityList
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  date={item.date}
                  viewed={item.viewed}
                  comment={item.comment}
                />
                <div className="w-full h-[1px] bg-[#A1A1A1]"></div>
              </>
            ))}
          </CommunitySection>
          <CommunitySection title="Q&A">
            {freeBoardData.map((item) => (
              <>
                <CommunityList
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  date={item.date}
                  viewed={item.viewed}
                  comment={item.comment}
                />
                <div className="w-full h-[1px] bg-[#A1A1A1]"></div>
              </>
            ))}
          </CommunitySection>
        </div>
      </div>

      {/** 우측 인기 글 */}
      <div className="right-popular grid w-[20%] section-margin"
        css={css`@media (max-width: 1300px) {
            display: none; /* 화면 너비가 1300px 이하일 때 숨김 처리 */}`}>
        <div className="flex flex-col gap-7 fixed">
          <SideListCard
            title={
              <div className="flex gap-1 items-center">
                <p className="font-semibold">최근 HOT 리뷰</p>
                <img src={fireIcon} alt="fire" />
              </div>
            }
          >
            {sideListData.map((item, index) => (
              <div key={item}>
                <p>
                  {index + 1}. {item.text}
                </p>
              </div>
            ))}
          </SideListCard>
          <SideListCard
            title={<p className="font-semibold">최근 TOP 리뷰어</p>}
            list={sideListData}
          >
            {sideListData.map((item, index) => (
              <div key={item}>
                <p>
                  {index + 1}. {item.text}
                </p>
              </div>
            ))}
          </SideListCard>
        </div>
      </div>
    </section>
  );
};

MainPage.propTypes = {};

export default MainPage;
