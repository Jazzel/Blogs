import React, { createContext, useState } from "react"

export const BlogContext = createContext()

const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    }

    const editBlogPost = () => {

    }

    const editBlogPost = () => {

    }

    // !! 12 ------


    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
    )
}

export default BlogProvider
