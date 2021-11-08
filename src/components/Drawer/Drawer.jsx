import React from 'react'
import Modal from '../Modal/modal'
import './Drawer.css'

const Drawer = ({ children, className = '', isModal, onClose }) => {
  return (
    <React.Fragment>
      <Modal isOpen={isModal} onClose={onClose} className='drawer__main'>
        <div className={`drawer ${className}`}>{children}</div>
      </Modal>
    </React.Fragment>
  )
}

export default Drawer
