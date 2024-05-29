import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.css'; // Import custom CSS file

const FeaturedBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [authorText, setAuthorText] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blogs/')
            .then(response => {
                setBlogs(response.data.slice(-3));
            })
            .catch(error => {
                console.error('There was an error fetching the blogs!', error);
            });
    }, []);

    const openModal = (blog) => {
        setSelectedBlog(blog);
        fetchCommentsForBlog(blog);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedBlog(null);
        setCommentText("");
        setComments([]);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (selectedBlog) {
            const commentData = {
                title: selectedBlog.title,
                author: authorText,
                category: selectedBlog.category,
                content: selectedBlog.content,
                comment: commentText,
            };
            axios.post('http://127.0.0.1:8000/api/comments/', commentData)
                .then(response => {
                    setCommentText("");
                    fetchCommentsForBlog();
                })
                .catch(error => {
                    console.error('There was an error submitting the comment!', error);
                });
        }
    };

    const fetchCommentsForBlog = (blog) => {
        axios.get('http://127.0.0.1:8000/api/comments/')
            .then(response => {
                const blogComments = response.data.filter(comment => (
                    comment.title === blog.title &&
                    comment.content === blog.content
                ));
                setComments(blogComments);
            })
            .catch(error => {
                console.error('There was an error fetching the comments for the selected blog!', error);
            });
    };

    return (
        <div className={`container mx-auto mt-12 ${styles.featuredBlogContainer}`}> {/* Apply custom CSS class */}
            <div className="mt-20"><h2 className="text-center text-4xl mb-8">Featured Blogs</h2></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {blogs.map(blog => (
                    <div key={blog.id} className="max-w-sm mx-auto overflow-hidden rounded shadow-lg bg-white">
                        <div className="px-6 py-4">
                            <div className="text-center font-bold text-xl mb-2">{blog.title}</div>
                            <p className="text-gray-700 text-base">{blog.content.substring(0, 100)}...</p>
                            <p className="text-gray-600 text-sm mt-2">By {blog.author} on {new Date(blog.date).toDateString()}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Button variant="primary" onClick={() => openModal(blog)}>See More</Button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedBlog && (
                <Modal show={showModal} onHide={closeModal} centered>
                    <Modal.Header closeButton>
                        <div className="mt-8 mb-4 ml-20 mr-20 text-center">
                            <h3 className="text-3xl font-bold">{selectedBlog.title}</h3>
                            <h6 className="text-lg font-medium">{selectedBlog.category}</h6>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-lg">{selectedBlog.content}</p>
                        <p><small className="text-muted">By {selectedBlog.author} on {new Date(selectedBlog.date).toDateString()}</small></p>

                        <div className="mt-8">
                            <Form onSubmit={handleCommentSubmit}>
                                <Form.Group controlId="commentTextArea">
                                    <Form.Label>Add a Comment</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        placeholder="Your comment..."
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="authorNameInput">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={authorText}
                                        onChange={(e) => setAuthorText(e.target.value)}
                                        placeholder="Your name..."
                                        required
                                    />
                                </Form.Group>
                                <Button type="submit" variant="primary" className="mt-4">Submit Comment</Button>
                            </Form>
                        </div>

                        <div className="mt-8">
                            <h5 className="text-lg font-bold">Comments</h5>
                            {comments.length > 0 ? (
                                comments.map(comment => (
                                    <div key={comment.id} className="border p-4 mb-4">
                                        <p>{comment.comment}</p>
                                        <p className="text-muted">By {comment.author}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No comments yet.</p>
                            )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default FeaturedBlog;
