import PropTypes from "prop-types";
import profileIcon from "../../../public/icons/profile.svg";
import heartIcon from "../../../public/icons/heart.svg";
import commentIcon from "../../../public/icons/comment.svg";

const CodeReviewCard = ({ title, tag, text, writer, liked, comment }) => {
  return (
    <div className="grid w-[300px] h-[300px] p-4 border-2 rounded-xl shadow-md">
      {/** 제목 */}
      <h1 className="truncate font-semibold overflow-hidden">{title}</h1>

      {/** 본문 */}
      <p className="text-ellipsis overflow-hidden">{text}</p>

      {/** footer */}
      <footer className="grid self-end gap-4">
        {/** 태그 */}
        <div className="flex gap-2">
          <p className="text-[#0466C8]">#{tag}</p>
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
  tag: PropTypes.string, // 추후에 string -> array, isRequired로 변경
  writer: PropTypes.string.isRequired,
  liked: PropTypes.number.isRequired,
  comment: PropTypes.number.isRequired,
};

export default CodeReviewCard;
