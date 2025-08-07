import React from "react";
import BlogCard from "../components/BlogCard";

function Home({ blogs, onEdit }) {
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