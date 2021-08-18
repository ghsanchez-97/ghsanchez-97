import React from "react";
import "./modal.css";
import { MdClose } from "react-icons/md";

const Modal = ({ children, onClose, className, setState }) => {
  const modalRef = React.useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose(false);
    }
  };

  const keyPress = React.useCallback(
    (e) => {
      if (e.key === "Escape" && onClose) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setState, onClose]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return <React.Fragment></React.Fragment>;
};
export default Modal;
