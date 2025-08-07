import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import BlogForm from './components/BlogForm';
import Header from './components/Header';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleSave = (newBlog) => {
    let updatedBlogs;
    if (editData) {
      updatedBlogs = blogs.map((b) => (b.id === newBlog.id ? newBlog : b));
    } else {
      updatedBlogs = [...blogs, newBlog];
    }

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    setEditData(null);
  };
  const handleEdit = (blog) => {
    setEditData(blog);
    setShowModal(true);
  };
  return (
    <div className="App">
      <Router>
        <Header onOpenModal={openModal} editData={editData} />
        <Routes>
          <Route path="/" element={<Home blogs={blogs} onEdit={handleEdit} />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <BlogForm
          show={showModal}
          onHide={closeModal}
          onSave={handleSave}
          editData={editData}
        />
      </Router>
    </div>
  );
}

export default App;
