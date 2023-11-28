import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";

import { css } from "@emotion/react";

const MentorApplyModal = ({ onDone }) => {
  return (
    <Modal onClose={onDone}>
      <form>
        <h2 className="mb-4 text-xl text-center">멘토 지원하기</h2>

        {/* 멘토 지원자 정보 */}
        <p className="mb-2">
          <label className="block mb-1">제목</label>
          <input type="text" name="title" id="title" css={inputFieldStyles} />
        </p>

        <div className="flex justify-between mb-2">
          <p>
            <label className="mb-1">직무</label>
            <input type="text" name="duty" id="duty" css={inputFieldStyles} />
          </p>

          <p>
            <label className="mb-1">경력</label>
            <input
              type="text"
              name="career"
              id="career"
              css={inputFieldStyles}
            />
          </p>
        </div>

        <p className="mb-2">
          <label className="block mb-1">소개글</label>
          <textarea
            name="detail"
            id="detail"
            placeholder="나를 자유롭게 소개해보세요 !"
            css={inputFieldStyles}
          />
        </p>

        <p className="mb-2">
          <label className="block mb-1">링크</label>
          <input type="text" name="link" id="link" css={inputFieldStyles} />
        </p>

        <p className="mb-2">
          <label className="block mb-1">연락방법</label>
          <input
            type="text"
            name="contact"
            id="contact"
            css={inputFieldStyles}
          />
        </p>

        <p className="mb-8">
          <label className="block mb-1">시간 당 가격</label>
          <input type="text" name="price" id="price" css={inputFieldStyles} />
        </p>

        {/* 취소 및 지원 버튼 */}
        <div className="flex justify-between">
          <Button size="lg" variant="default" onClick={onDone}>
            취소하기
          </Button>
          <Button size="lg" variant="blue">
            지원하기
          </Button>
        </div>
      </form>
    </Modal>
  );
};

const inputFieldStyles = css`
  width: 100%;
  padding: 8px;
  border: 1px solid #d9e2f1;
  border-radius: 4px;
  font-size: 14px;
`;

export default MentorApplyModal;
