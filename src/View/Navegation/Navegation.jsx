import React from 'react';
import './Navegation.css';
import logo from 'assets/img/LogoGhsh.svg';
import Drawer from 'components/Drawer/Drawer';

const Navegation = () => {
    return(
        <React.Fragment>
            <div className="navbar-header">
                <div className="navbar-img">
                    <img src={logo} alt="Logo Personal"/>
                </div>
                <div className="navbar-drawer">
                    <Drawer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navegation;