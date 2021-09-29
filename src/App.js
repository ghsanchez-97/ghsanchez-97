import React from "react";
import "./styles/App.css";
import Nav from "./View/Navegation/Navegation";
import Message from "View/Message/message";
import About from "View/About/About";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
          <About />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
