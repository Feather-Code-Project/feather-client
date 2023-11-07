import { useState } from "react";
import PropTypes from "prop-types";
import featherWhiteIcon from "../../../public/icons/feather-white.svg";
import profileIcon from "../../../public/icons/profile.svg";

const FeatherNavBar = () => {
  const [showList, setShowList] = useState(false);
  const handleOnMouse = () => {
    setShowList(true);
  };
  const handleOutMouse = () => {
    setShowList(false);
  };
  return (
    <nav className="sticky top-0 h-[70px] bg-[#0353A4] flex items-center justify-between section-margin text-lg text-white font-semibold">
      <button className="flex gap-1">
        <img src={featherWhiteIcon} alt="icon" className="w-7 h-7" />
        <h1 className="font-semibold text-lg">깃털코드</h1>
      </button>

      <div className="flex items-center gap-8">
        <div className="flex gap-5 h-full">
          <div
            className="grid relative justify-items-center"
            onMouseOver={handleOnMouse}
            onMouseOut={handleOutMouse}
          >
            <ul>커뮤니티</ul>
            {showList && (
              <div className="grid absolute list-none px-5 w-32 mt-8 text-center bg-[#0353A4]">
                <li className="py-2">자유게시판</li>
                <li className="py-2">스터디</li>
                <li className="py-2">Q&A</li>
              </div>
            )}
          </div>
          <button>코드리뷰</button>
          <button>멘토링</button>
        </div>

        <button className="flex gap-2 p-2 border border-white rounded-xl items-center">
          <img src={profileIcon} alt="profile" />
          <h1>프로필</h1>
        </button>
      </div>
    </nav>
  );
};

FeatherNavBar.propTypes = {};

export default FeatherNavBar;
