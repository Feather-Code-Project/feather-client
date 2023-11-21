import PropTypes from "prop-types";
import profileIcon from "../../../public/icons/profile.svg";
import heartIcon from "../../../public/icons/heart.svg";
import commentIcon from "../../../public/icons/comment.svg";
import { css } from "@emotion/react";

const CodeReviewCard = ({ title, tag, text, writer, liked, comment }) => {
  return (
    <div
      className="grid basis-[32%] min-w-[100px] shrink-1 grow-1 h-[300px] p-4 my-4 border-2 rounded-xl shadow-md text-ellipsis overflow-hidden"
      css={css`
        @media (max-width: 1080px) {
          flex-basis: 49%;
        }
        @media (max-width: 740px) {
          flex-basis: 100%;
        }
      `}
    >
      {/** 제목 */}
      <h1 className="font-semibold text-ellipsis whitespace-nowrap overflow-hidden">{title}</h1>

      {/** 본문 */}
      <p className="text-ellipsis overflow-hidden">{text}</p>

      {/** footer */}
      <footer className="grid self-end gap-4">
        {/** 태그 */}
        <div className="flex gap-2">
          {tag.map((tag) => (
            <p key={tag} className="text-[#0466C8]">
              #{tag}
            </p>
          ))}
        </div>

        <div className="flex self-end justify-between">
          <div className="flex items-center gap-1">
            <img src={profileIcon} alt="user" />
            <p>{writer}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <img src={heartIcon} alt="liked" />
              <p>{liked}</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={commentIcon} alt="liked" />
              <p>{comment}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

CodeReviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tag: PropTypes.array.isRequired, // 추후에 string -> array, isRequired로 변경
  writer: PropTypes.string.isRequired,
  liked: PropTypes.number.isRequired,
  comment: PropTypes.number.isRequired,
};

export default CodeReviewCard;