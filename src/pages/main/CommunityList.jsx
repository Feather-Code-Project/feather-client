import React from "react";
import PropTypes from "prop-types";

import viewIcon from "../../../public/icons/view.svg";
import commentIcon from "../../../public/icons/comment.svg";

const CommunityList = ({ title, text, date, viewed, comment }) => {
  return (
    <div className="grid gap-2 py-2">
      <h1 className="font-semibold text-sm">{title}</h1>
      <p className="text-xs">{text}</p>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p className="text-xs">{date}</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <img src={viewIcon} alt="viewed" />
            <p className="text-xs">{viewed}</p>
          </div>

          <div className="flex items-center gap-1">
            <img
              src={commentIcon}
              alt="comment"
              className="w-[16px] h-[16px]"
            />
            <p className="text-xs">{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CommunityList.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  viewed: PropTypes.number.isRequired,
  comment: PropTypes.number.isRequired,
};

export default CommunityList;
