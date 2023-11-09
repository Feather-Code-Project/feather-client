import PropTypes from "prop-types";
import profileIcon from "../../../public/icons/profile.svg";

import { css } from "@emotion/react";

const MentorCard = ({ title, duty, career, job, price, writer, date }) => {
  return (
    <div
      className="grid basis-[32%] min-w-[240px] shrink-1 grow-1 h-[300px] p-4 my-4 border-2 rounded-xl shadow-md"
      css={css`
        @media (max-width: 1290px) {
          flex-basis: 49%;
        }
        @media (max-width: 910px) {
          flex-basis: 100%;
        }
      `}
    >
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
  career: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MentorCard;
