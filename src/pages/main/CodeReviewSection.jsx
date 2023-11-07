import PropTypes from "prop-types";

import rightArrowIcon from "../../../public/icons/rightArrow.svg";

const CodeReviewSection = ({ children }) => {
  return (
    <div className="grid w-[1000px] h-[400px] p-6 border-2 rounded-xl place-self-end shadow-md">
      <div className="flex self-start justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">코드 리뷰</h1>
        <button>
          <img src={rightArrowIcon} alt="go" className="w-8 h-8" />
        </button>
      </div>
      {children}
    </div>
  );
};

CodeReviewSection.propTypes = {
  children: PropTypes.any,
};

export default CodeReviewSection;
