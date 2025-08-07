import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        // const found = allBlogs.find((b) => b.id === Number(id));
        const found = allBlogs.find((b) => String(b.id) === id);
        console.log("All blogs from storage:", allBlogs);
        console.log("Looking for blog with id:", id);
        if (found) {
            setBlog(found);
        }
    }, [id]);

    if (!blog) return <p className="text-center mt-5">Blog not found</p>;
    return (
        <div className="container mt-5">
            <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
                ← Back to Home
            </button>
            <div className="card">
                <div className="card-body">
                    <h2>{blog.title}</h2>
                    <p className="text-muted">
                        By {blog.author} | Category: {blog.category}
                    </p>
                    <hr />
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;