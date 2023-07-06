import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogCard from '../../shared/component/blogCard/BlogCard';

const Blogs = () => {
  const [data,setData]= useState([]);
  const navigate = useNavigate();

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

  const handleBlogRoute =(route)=>{
    navigate("/blogs/"+route)
  }

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Latest Blog Posts</h1>
      {data ? data.map((blog) => (
        <BlogCard blog={blog} callback={handleBlogRoute}/>
      )):<div>No Data</div>}
    </div>
  );
};

export default Blogs;
