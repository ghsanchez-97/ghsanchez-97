import React from 'react';
import { Modal } from 'components/Modal/modal';
import './Drawer.css'

const Drawer = ({children, className = "", isModal, isClose,}) => {
  
  return (
    <React.Fragment>
      <Modal isOpen={isModal} onClose={isClose} className='modal__main'>
        <div className={`drawer ${className}`}>
          {children}
        </div>
      </Modal>
     
    </React.Fragment>
  );
}


export default Drawer;