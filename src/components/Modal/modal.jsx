import React from "react";
import "./modal.css";
import { MdClose } from "react-icons/md";

const Modal = ({ children, isOpen, className = "", onClose }) => {
  const modalRef = React.useRef();
  const closeModal = (e) => {
    if (modalRef?.current === e?.target) {
      onClose(false);
      console.log("close");
    }
  };

  const keyPress = React.useCallback(
    (e) => {
      if(e?.keyCode === 27 && e?.key === 'Escape' && isOpen) {
        onClose(false);
      }
    },
    [isOpen, onClose]
  );

  React.useEffect(() => {
    document?.addEventListener("keydown", keyPress);
    return () => document?.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <React.Fragment>
      {isOpen ? (
        <div className='modal__container' onClick={closeModal} ref={modalRef}>
            <div className={`modal__content`}> 
              <button onClick={() => onClose(prev => !prev)} aria-label='Close Modal' className='modal__close'>
                <MdClose />
              </button>
              <div className={`modal__main ${className}`}>{children}</div>
            </div>
        </div>
      ) : null}
    </React.Fragment>
  )
};
export default Modal;