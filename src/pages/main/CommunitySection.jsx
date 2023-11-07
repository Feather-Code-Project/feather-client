import PropTypes from "prop-types";

import rightArrowIcon from "../../../public/icons/rightArrow.svg";

const CommunitySection = ({ children, title }) => {
  return (
    <div className="grid w-[320px] h-[380px] p-5 border-2 rounded-xl shadow-md">
      <div className="flex self-start justify-between items-center top-0">
        <h1 className="text-lg font-semibold">{title}</h1>
        <button>
          <img src={rightArrowIcon} alt="go" />
        </button>
      </div>
      <div className="w-full h-[1px] bg-[#A1A1A1] mt-2"></div>
      {children}
    </div>
  );
};

CommunitySection.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default CommunitySection;
