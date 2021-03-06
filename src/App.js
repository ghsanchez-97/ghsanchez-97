import React from "react";
import "./styles/App.css";
import Nav from "./View/Navegation/Navegation";
import Message from "View/Message/message";

function App() {
  return (
    <React.Fragment>
      <div className="containers">
        <div className="rows">
          <div className="cols">
            <Nav />
          </div>
          <div className="app__cols">
            <Message />
          </div>
        </div>
        <main className="main__container">
          <Nav />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
