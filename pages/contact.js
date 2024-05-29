import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/contact/', formData);
            if (response.status === 201) {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            setErrorMessage('There was an error sending your message. Please try again later.');
            console.error('Error submitting contact form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto mt-5 pt-5">
            <Head>
                <title>Contact Us - Your Website Name</title>
                <meta name="description" content="Contact us for any inquiries or feedback. We'd love to hear from you!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-center text-4xl mb-8">Contact Us</h1>

            <div className="max-w-lg mx-auto">
                {successMessage && (
                    <div className="alert alert-success mb-4" role="alert">
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className="alert alert-danger mb-4" role="alert">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message"
                            className="form-control"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
