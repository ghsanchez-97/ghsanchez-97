import React from 'react';
import '../styles/App.css';
import Nav from './View/Navegation/Navegation';

function App() {
  return (
    <React.Fragment> 
      <div className="containers">
        <div className="rows">
          <div className="cols"> 
            <Nav />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
