// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-40">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* Contact */}
                <div className="w-full md:w-1/4 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul>
                        <li>Email: sanskarsrdav@gmail.com</li>
                        <li>Phone: 7289939775</li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>

                {/* About */}
                <div className="w-full md:w-1/4 mb-8">
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at felis vel ante commodo consequat.</p>
                </div>

                {/* Privacy Policy */}
                <div className="w-full md:w-1/4 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Privacy Policy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at felis vel ante commodo consequat.</p>
                </div>

                {/* Terms of Use */}
                <div className="w-full md:w-1/4 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Terms of Use</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at felis vel ante commodo consequat.</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; 2024 Example Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
