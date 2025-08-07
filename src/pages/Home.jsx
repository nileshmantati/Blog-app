import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Home({ editData, onEdit }) {
    const [blogs, setBlogs] = useState([]);

    // Load blogs from localStorage on mount
    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        setBlogs(storedBlogs);
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>All Blogs</h2>
            </div>

            {blogs.length === 0 ? (
                <p>No blogs yet.</p>
            ) : (
                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-md-4 mb-4" key={blog.id}>
                            <BlogCard blog={blog} onEdit={onEdit} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;