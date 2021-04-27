import React from 'react';
import '../styles/Navegation.css'
import logo from '../assets/img/LogoGhsh.svg'

class Navegation extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={logo} alt="Logo Personal"/> 
                        </div>
                        <div className="col">
                            Menu
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}
export default Navegation;