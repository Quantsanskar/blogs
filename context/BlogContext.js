// context/BlogContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for blog details
const BlogContext = createContext();

// Create a provider component
export const BlogProvider = ({ children }) => {
    const [blogDetails, setBlogDetails] = useState(null);

    return (
        <BlogContext.Provider value={{ blogDetails, setBlogDetails }}>
            {children}
        </BlogContext.Provider>
    );
};

// Custom hook to use the BlogContext
export const useBlog = () => {
    return useContext(BlogContext);
};
