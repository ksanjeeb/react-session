import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog, ...props}) => {
    return (
        <div className="blog-item" key={blog?.id}>
        <h2 className="blog-title">{blog?.title}</h2>
        <p className="blog-meta">
          By {blog?.author} | {blog?.date}
        </p>
        <p className="blog-excerpt"> {blog?.content}</p>
        <Link to={`/blogs/${blog?.id}`} className="read-more-link">
          Read More
        </Link>
      </div>
    );
};

export default BlogCard;