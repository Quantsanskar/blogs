// components/Blogs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import { useBlog } from '../context/BlogContext';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { setBlogDetails } = useBlog();

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        axios.get('http://127.0.0.1:8000/api/blogs/')
            .then(response => {
                const blogsData = response.data.map(blog => ({
                    ...blog,
                    
                })).reverse();
                setBlogs(blogsData);
                setFilteredBlogs(blogsData); // Initialize filteredBlogs with all blogs
            })
            .catch(error => {
                console.error('There was an error fetching the blogs!', error);
            });
    };

    

    const handleReadMore = (blog) => {
        setBlogDetails(blog);
    };

    const filterBlogsByCategory = (category) => {
        if (category === selectedCategory) {
            setSelectedCategory(null);
            setFilteredBlogs(blogs);
        } else {
            setSelectedCategory(category);
            const filtered = blogs.filter(blog => blog.category === category);
            setFilteredBlogs(filtered);
        }
    };

    return (
        <div className="container mx-auto mt-5 pt-5">
            <h2 className="text-center text-4xl mb-8">Our Blogs</h2>

            <div className="text-center mb-5">
                <button
                    className={`btn btn-outline-primary mx-2 ${selectedCategory === 'Finance' ? 'active' : ''}`}
                    onClick={() => filterBlogsByCategory('Finance')}
                >
                    Finance
                </button>
                <button
                    className={`btn btn-outline-primary mx-2 ${selectedCategory === 'Adventure' ? 'active' : ''}`}
                    onClick={() => filterBlogsByCategory('Adventure')}
                >
                    Adventure
                </button>
                <button
                    className={`btn btn-outline-primary mx-2 ${selectedCategory === 'Health' ? 'active' : ''}`}
                    onClick={() => filterBlogsByCategory('Health')}
                >
                    Health
                </button>
            </div>

            <div className="row">
                {filteredBlogs.map(blog => (
                    <div key={blog.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{moment(blog.date).format('MMM D, YYYY')}</p>
                                <Link href={`/blogs/${blog.id}`} className="btn btn-primary" onClick={() => handleReadMore(blog)}>
                                    Read More

                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
