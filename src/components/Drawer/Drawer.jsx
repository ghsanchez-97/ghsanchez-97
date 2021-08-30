import React from 'react';
import Modal from 'components/Modal/modal';
import './Drawer.css'

const Drawer = ({children, className = "", isModal, isClose,}) => {
  //const [showModal, setShowModal] = React.useState(false); 
  
  return (
    <React.Fragment>
      <Modal isModal={isModal} isClose={isClose} className='modal__main'>
        <div className={`drawer ${className}`}>
          {children}
        </div>
      </Modal>
     
    </React.Fragment>
  );
}


export default Drawer;