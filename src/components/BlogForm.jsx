import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function BlogForm({ show, onHide, onSave, editData }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (editData) {
            setTitle(editData.title || "");
            setAuthor(editData.author || "");
            setContent(editData.content || "");
        } else {
            setTitle("");
            setAuthor("");
            setContent("");
        }
    }, [editData, show]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            id: editData?.id || Date.now(),
            title,
            author,
            content,
            date: new Date().toLocaleDateString(),
        };
        onSave(blog);
        onHide();
    };
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Blog</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Auther</Form.Label>
                            <Form.Control
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Cancel</Button>
                        <Button type="submit" variant="primary">
                            Submit Blog
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default BlogForm
