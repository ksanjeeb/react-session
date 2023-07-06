import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog,callback, ...props }) => {
    const linkHandler= id =>{
        if(typeof callback === 'function' )callback(id);
    }

    return (
        <div className="blog-item" key={blog?.id}>
        <h2 className="blog-title">{blog?.title}</h2>
        <p className="blog-meta">
          By {blog?.author} | {blog?.date}
        </p>
        <p className="blog-excerpt"> {blog?.content}</p>
        <div className="read-more-link" onClick={_=>linkHandler(blog?.id)}>
          Read More
        </div>
      </div>
    );
};

export default BlogCard;