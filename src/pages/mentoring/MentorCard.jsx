import PropTypes from "prop-types";
import profileIcon from "../../../public/icons/profile.svg";

const MentorCard = ({ title, duty, career, job, price, writer, date }) => {
  return (
    <div className="grid w-[300px] h-[300px] p-4 my-4 border-2 rounded-xl shadow-md">
      {/* 제목 */}
      <h1 className="font-semibold">{title}</h1>
      {/* 본문 */}
      <div className="space-y-2">
        <p className="text-ellipsis overflow-hidden text-sm">직무 : {duty}</p>
        <p className="text-ellipsis overflow-hidden text-sm">경력 : {career}</p>
        <p className="text-ellipsis overflow-hidden text-sm">현직 : {job}</p>
        <p className="text-ellipsis overflow-hidden text-sm">{price}</p>
      </div>

      <div className="border-b w-full border-[#A1A1A1]"></div>

      {/* Footer */}
      <footer className="flex self-end justify-between">
        <div className="flex items-center gap-1">
          <img src={profileIcon} alt="user" />
          <p>{writer}</p>
        </div>
        <div className="flex items-center">
          <p>{date}</p>
        </div>
      </footer>
    </div>
  );
};

MentorCard.propTypes = {
  title: PropTypes.string.isRequired,
  duty: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired, // 추후에 string -> array, isRequired로 변경
  job: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MentorCard;
