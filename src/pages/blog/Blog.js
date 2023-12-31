import React, { useEffect, useState } from 'react';
import "./Blog.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../../shared/component/loader/Loader';

const Blog = () => {
    const [blog, setBlog] = useState({})
    const [loader, setLoader] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getBlogs(id);
    }, [])

    const getBlogs = (id) => {
        setLoader(true)
        axios.get('http://127.0.0.1:8080/api/v1/blogs/' + id)
            .then(response => {
                setBlog(response?.data?.data);
                setLoader(false)
            })
            .catch(error => {
                window.alert('Error while loading.');
                setLoader(false)

            })
    }

    return (
        <>
        {loader ?<div style={{textAlign:"center", marginTop:"20px"}}>Loading...</div>:<div className="individual-blog-container">
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-meta">
                By {blog.author} | {blog.date}
            </p>
            <div className="blog-content">{blog.content}</div>
        </div>}
        </>
    
    );
};

export default Blog;