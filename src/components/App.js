import React from 'react';
import '../styles/App.css';
import Nav from './Navegation';
import Drawer from './Drawer';

function App() {
  return (
    <React.Fragment> 
      <Drawer />
      <div className="container">
        <div className="row">
          <div className="col-md-6"> 
            <Nav />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
