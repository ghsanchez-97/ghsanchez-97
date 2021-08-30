import React from "react";
import "./modal.css";
import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";

const Modal = ({ children, isModal, className = "", isClose }) => {
  const modalRef = React.useRef();

  const animation = useSpring({
    config: { duration: 250 },
    opacity: isModal ? 1 : 0,
    transform: isModal ? "translateY(0)" : "translateY(-100%)",
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      isClose(false);
    }
  };

  const keyPress = React.useCallback(
    (e) => {
      if (e.key === "Escape" && isModal) {
        isClose(false);
        console.log("I pressed");
      }
    },
    [isModal, isClose]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <React.Fragment>
      {isModal ? (
        <div className='modal__container' onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}> 
            <div className={`modal__content`}> 
              <button onClick={() => isClose(prev => !prev)} aria-label='Close Modal' className='modal__close'>
                <MdClose />
              </button>
              <div className={`modal__main ${className}`}>{children}</div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </React.Fragment>
  )
};
export default Modal;
