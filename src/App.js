import React from "react";
import "./styles/App.css";
import Nav from "./View/Navegation/Navegation";
import Message from "View/Message/message";
import Modal from "./components/Modal/modal";

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
          <button onClick={openModal} className='bg-white cursor-pointer py-4 px-4 flex mx-auto'>Open Modal</button>
          <Modal isOpen={showModal} onClose={setShowModal}>
            <div className='flex justify-center absolute top-40 right-40'>
              <h1 className='text-white text-2xl'>Are you ready?</h1>
              <p className='text-white text-2xl'>Get exclusive access to our next launch.</p>
              <button className='text-white text-2xl'>Join Now</button>
            </div>
          </Modal>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
