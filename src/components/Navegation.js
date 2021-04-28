import React from 'react';
import '../styles/Navegation.css';
import logo from '../assets/img/LogoGhsh.svg';
import Drawer from './Drawer';

class Navegation extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container_nav">
                    <div className="row_nav">
                        <div className="col_nav img">
                            <img src={logo} alt="Logo Personal"/> 
                        </div>
                        <div className="col_nav drawer"> 
                            <Drawer />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}
export default Navegation;