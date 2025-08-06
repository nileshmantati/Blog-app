import { useState } from 'react';
import './App.css';
import { Button } from "react-bootstrap";
import BlogForm from './components/BlogForm';
import Header from './components/Header';

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <Header onOpenModal={openModal} />
      <BlogForm
        show={showModal}
        onHide={closeModal} />
    </div>
  );
}

export default App;
