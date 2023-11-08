import PropTypes from "prop-types";
import SideListCard from "../../components/Card/SideListCard";
import { bestTag, sideListData } from "../../../public/mocks/mainPageData";

import fireIcon from "../../../public/icons/fire.svg";
import Button from "../../components/button/Button";
import searchIcon from "../../../public/icons/search.svg";
import { useState } from "react";

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
  return (
    <div className="code-review-page-container flex justify-center w-full mx-auto p-8 bg-slate-800">
      {/* 레이아웃 좌우 균형을 위한 empty section */}
      <div className="w-[15%] bg-slate-300"></div>

      {/* 코드리뷰 페이지 main section */}
      <div className="w-[70%] text-center bg-black">
        <div className="flex w-full">

          <div className="search-bar-section w-[90%] bg-white flex relative">
            <div className="search-tag-section w-[50%] flex my-auto">
              {bestTag.map((item, index) => (
                <button key={index}
                  onClick={() => toggleTag(index)}
                  className={`mx-auto rounded-xl py-1 px-3 shadow-md ${
                    activeTags[index] ? 'bg-blue-400' : 'bg-gray-300'
                  }`}
                >
                  <p className="text-sm">#{item.tag}</p>
                </button>
              ))}
              <button 
                onClick={() => handleShowList()}
                className="text-gray-400"
              >
                {showTagList ? " ▲" : " ▼"}
              </button>
              {/* TODO: Tag들 구현하기 */}
              {
                showTagList && (
                  <div className="w-[50%] bg-white absolute top-[39px]">
                    hi
                  </div>
                )
              }
            </div>
            <div className="search-bar flex gap-5 w-[50%] h-[100%] border-2 rounded-full px-5 items-center shadow-md">
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

          <div className="w-[10%]">
            <Button size="lg" variant="blue">
              작성하기
            </Button>
          </div>
        </div>

        {/* cardlist section */}
        <div>

        </div>
      </div>

      {/* 우측 인기 글 */}
      <div className="right-popular-container w-[15%] bg-slate-300">
        <div className="flex flex-col gap-7">
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
    </div>
  );
};

CodeReviewPage.propTypes = {
};

export default CodeReviewPage;