import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  const [data,setData]= useState([]);
  useEffect(()=>{
    getBlogs();
  },[])

  const getBlogs=()=>{
    axios.get('http://127.0.0.1:8080/api/v1/blogs')
    .then(response => {
        setData(response?.data?.data);
    })
    .catch(error => {
        window.alert('Error while loading.');
    })
  }

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Latest Blog Posts</h1>
      {data ? data.map((blog) => (
        <div className="blog-item" key={blog.id}>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-meta">
            By {blog.author} | {blog.date}
          </p>
          <p className="blog-excerpt"> {blog.content}</p>
          <Link to={`/blogs/${blog.id}`} className="read-more-link">
            Read More
          </Link>
        </div>
      )):<div>No Data</div>}
    </div>
  );
};

export default Blogs;
