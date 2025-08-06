import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";

function BlogForm({ show, onHide }) {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Blog</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group className="mb-2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Auther</Form.Label>
                            <Form.Control
                                type="text"
                                // value={user}
                                // onChange={(e) => setUser(e.target.value)}
                                required
                            // disabled={isEditMode}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"1
                                // value={review}
                                // onChange={(e) => setReview(e.target.value)}
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
