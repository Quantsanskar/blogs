// pages/blogs/[id].js
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useBlog } from '../../context/BlogContext'; // Import the custom hook to use the BlogContext

const BlogDetails = () => {
    const { blogDetails } = useBlog(); // Get the blog details from context
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchComments();
    }, [blogDetails]);

    const fetchComments = async () => {
        if (blogDetails) {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/comments/');
                const blogComments = response.data.filter(
                    c => c.title === blogDetails.title && c.content === blogDetails.content
                );
                setComments(blogComments);
            } catch (error) {
                console.error('There was an error fetching the comments!', error);
            }
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const commentData = {
            title: blogDetails.title,
            name,
            category: blogDetails.category,
            content: blogDetails.content,
            comment,
        };

        try {
            await axios.post('http://127.0.0.1:8000/api/comments/', commentData);
            setComment('');
            setName('');
            fetchComments();
        } catch (error) {
            console.error('There was an error submitting the comment!', error);
        } finally {
            setLoading(false);
        }
    };

    if (!blogDetails) {
        return <div className="container mt-5 pt-5 text-center text-xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto mt-10 pt-10 max-w-4xl">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{blogDetails.title}</h2>
                    <h4 className="font-bold text-gray-800 mb-4">by {blogDetails.author}</h4>
                    <p className="text-gray-600 text-sm mb-4">{moment(blogDetails.date).format('MMM D, YYYY')}</p>
                    <p className="text-3xl text-gray-900 leading-relaxed mb-4">{blogDetails.content}</p>

                    <hr className="my-4" />

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Comments</h3>
                    <form onSubmit={handleCommentSubmit} className="mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                                Comment
                            </label>
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>

                    <div className="comments">
                        {comments.map((comment) => (
                            <div key={comment.id} className="mb-4">
                                <p className="font-bold text-gray-800">{comment.author}</p>
                                <p className="text-gray-700">{comment.comment}</p>
                                <p className="text-gray-600 text-sm">{moment(comment.date).format('MMM D, YYYY')}</p>
                                <hr className="my-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
