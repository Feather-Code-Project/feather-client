import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div
        className="fixed w-full h-full bg-black bg-opacity-60 z-9"
        onClick={onClose}
      ></div>
      <dialog
        open
        className="fixed top-[15%] bg-white border rounded-md p-6 w-[460px] max-w-90% z-10"
      >
        {children}
      </dialog>
    </>,
    document.getElementById("modal")
  );
}
