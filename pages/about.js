import React from 'react';
import Head from 'next/head';

const About = () => {
    return (
        <div className="container mx-auto mt-5 pt-5">
            <Head>
                <title>About Us - Your Website Name</title>
                <meta name="description" content="Learn about our brand story, mission, and team members." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero Section */}
            <section className="hero bg-gray-900 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Discover Our Story</h1>
                    <p className="mt-4 text-lg">Learn about our brand's journey, mission, and values.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="about py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
                    <p className="text-lg leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus metus in mauris sodales, sit amet tempor felis vulputate. Phasellus vitae odio nec velit elementum eleifend. Nullam nec justo ut nisl tempor sodales a nec ante. Duis non tellus mauris.</p>
                    {/* Include additional information about your brand */}
                </div>
            </section>

            {/* Team Section */}
            <section className="team py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Include team member profiles */}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Customers Say</h2>
                    <div className="testimonial-slider">
                        {/* Include customer testimonials */}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta py-16 bg-gray-900 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg mb-8">Contact us today to learn more about our services.</p>
                    <a href="/contact" className="btn btn-primary">Contact Us</a>
                </div>
            </section>
        </div>
    );
};

export default About;
