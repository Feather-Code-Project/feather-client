import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import profileIcon from "../../../public/icons/profile.svg";

const MentorInfoModal = ({ mentorInfo, onDone }) => {
  const { title, duty, career, job, price, writer, date, detail } = mentorInfo;

  return (
    <Modal onClose={onDone}>
      {/* 제목 */}
      <h2 className="mb-4 text-xl font-bold text-center">{title}</h2>

      {/* 작성자 멘토 정보 */}
      <div className="flex self-end mb-2">
        <div className="flex items-center justify-between gap-1">
          <img src={profileIcon} alt="user" />
          <p>{writer}</p>
        </div>
        <div className="flex items-center text-sm">
          <p>{date}</p>
        </div>
      </div>

      <div className="mb-4">
        <p>직무: {duty}</p>
        <p>경력: {career}</p>
        <p>현직: {job}</p>
      </div>

      {/* 본문 */}
      <div className="border-b w-full border-[#A1A1A1]" />

      <div className="my-4 overflow-y-auto whitespace-pre-wrap max-h-60">
        <p>{detail}</p>
      </div>

      <div className="border-b w-full border-[#A1A1A1]" />

      {/* 가격 */}
      <div className="my-4">
        <p>가격: {price}</p>
      </div>

      {/* 취소 및 신청 버튼 */}
      <div className="flex justify-between">
        <Button size="lg" variant="default" onClick={onDone}>
          취소하기
        </Button>
        <Button size="lg" variant="blue">
          신청하기
        </Button>
      </div>
    </Modal>
  );
};

export default MentorInfoModal;
