import { useNavigate } from "react-router-dom";

function BlogCard({ blog, onEdit }) {
    const navigate = useNavigate();
    console.log("Navigating to blog:", blog.id);
    return (
        <div className="card h-100">
            <div className="card-body">
                <h5
                    className="card-title text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/blog/${blog.id}`)}
                >
                    {blog.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {blog.author}
                </h6>
                <p className="card-text">{blog.content.slice(0, 100)}...</p>
                <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit(blog)}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default BlogCard;