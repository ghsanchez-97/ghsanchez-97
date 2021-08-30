import React from 'react';
import './Navegation.css';
import logo from 'assets/img/LogoGhsh.svg';
import Drawer from 'components/Drawer/Drawer';
import { MdMenu } from 'react-icons/md';

const Navegation = () => {

    const [showModal, setShowModal] = React.useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return(
        <React.Fragment>
            <div className="navbar-header">
                <div className="navbar-img">
                    <img src={logo} alt="Logo Personal"/>
                </div>
                <div className="navbar-drawer">
                    <button onClick={openModal} className='navbar__drawer--button'><MdMenu/></button>
                    <Drawer isModal={showModal} isClose={setShowModal}>
                        <div className="drawer__content">
                            <div className="drawer-content__title">
                                <h1>Menu</h1>
                            </div>
                        </div>
                    </Drawer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navegation;