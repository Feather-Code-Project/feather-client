import SideListCard from "../../components/Card/SideListCard";
import { bestTag, codeReviewData, sideListData } from "../../../public/mocks/mainPageData";

import fireIcon from "../../../public/icons/fire.svg";
import Button from "../../components/button/Button";
import searchIcon from "../../../public/icons/search.svg";
import { useState } from "react";
import { css } from "@emotion/react";
import CodeReviewCard from "../../components/Card/CodeReviewCard";
import CodeReviewSection from "./CodeReviewSection";
import Pagination from "./Pagination";

const CodeReviewPage = props => {
  // 각 태그의 활성/비활성 상태를 관리하는 상태
  const [activeTags, setActiveTags] = useState([]);

  // 태그를 클릭할 때 호출되는 함수
  const toggleTag = (index) => {
    // 현재 상태의 복사본을 만들어서
    const newActiveTags = [...activeTags];
    // 클릭한 태그의 상태를 토글
    newActiveTags[index] = !newActiveTags[index];
    // 상태 업데이트
    setActiveTags(newActiveTags);
  };

  const [showTagList, setShowTagList] = useState(false);
  
  const handleShowList = () => {
    setShowTagList(!showTagList);
  };

  // 여기서 부터는 페이지 및 데이터 관련 함수
  const itemsPerPage = 6; // 한 페이지당 보여줄 코드리뷰 카드의 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  const codeReviewsRepeated = [];
  for (let i = 0; i < 5; i++) {
    codeReviewsRepeated.push(...codeReviewData);
  }


  // 현재 페이지에 해당하는 데이터를 계산.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const codeReviewsOnCurrentPage = codeReviewsRepeated.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="code-review-page-container flex w-full py-5 mx-auto section-margin justify-evenly max-w-screen-2xl">

      {/* 코드리뷰 페이지 main section */}
      <div className="w-[70%]">
        <div className="flex w-full mb-3">

          <div className="search-bar-section w-full flex">
            <div className="search-tag-section w-[50%] flex m-auto relative"
              css={css`
              @media (max-width: 1080px) {
                display: none;
              }
            `}
            >
              {bestTag.filter((item,) => item.id <= 6)
              .map((item) => (
                <button key={item.id}
                  onClick={() => toggleTag(item.id)}
                  className={`mx-auto rounded-xl py-1 px-3 shadow-md ${
                    activeTags[item.id] ? 'bg-blue-400' : 'bg-gray-300'
                  }`}
                >
                  <p className="text-sm"
                    css={css`
                    @media (max-width: 1300px) {
                      font-size: 11px;
                    }
                  `}
                  >
                    #{item.tag}
                    </p>
                </button>
              ))}
              <button 
                onClick={() => handleShowList()}
                className="text-gray-400"
              >
                {showTagList ? " ▲" : " ▼"}
              </button>
              {/* TODO: Tag 데이터의 총 개수에 따라 추가 구현 필요. 태그들 너무 많아지면 줄바꿈 필요해서 */}
              {
                showTagList && (
                  <div className="w-[100%] flex m-auto bg-white absolute top-8">
                    {bestTag.filter((item,) => item.id > 6)
                    .map((item) => (
                      <button key={item.id}
                        onClick={() => toggleTag(item.id)}
                        className={`mx-auto rounded-xl py-1 px-3 shadow-md ${
                          activeTags[item.id] ? 'bg-blue-400' : 'bg-gray-300'
                        }`}
                      >
                        <p className="text-sm">#{item.tag}</p>
                      </button>
                    ))}
                  </div>
                )
              }
            </div>  
            <div className="search-bar flex w-[50%] h-[100%] border-2 rounded-full px-3 items-center shadow-md"
              css={css`
                @media (max-width: 1300px) {
                  width: 40%;
                }
                @media (max-width: 1080px) {
                  width: 90%;
                }
              `}
            >
              <input
                type="text"
                placeholder="궁금하신 모든 것을 여기에 적어주세요!"
                className="w-full h-full outline-none"
                css={css`
                @media (max-width: 1300px) {
                  font-size: 11px;
                }
              `}
              />
              <button>
                <img src={searchIcon} alt="search" />
              </button>
            </div>
          </div>

          <div className="w-[15%] flex justify-center">
            <Button size="lg" variant="blue">
              작성하기
            </Button>
          </div>
        </div>

        {/* 코드리뷰 게시물 섹션 */}
        <div className="">
          <CodeReviewSection>
            <div className="flex flex-wrap justify-between">
              {codeReviewsOnCurrentPage.map((item) => (
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
            <div className="flex justify-center">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={codeReviewsRepeated.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </CodeReviewSection>
        </div>
      </div>

      {/* 우측 인기 글 */}
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
              <div key={item} className="overflow-hidden text-ellipsis whitespace-nowrap">
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
              <div key={item} className="overflow-hidden text-ellipsis whitespace-nowrap">
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

CodeReviewPage.propTypes = {
};

export default CodeReviewPage;