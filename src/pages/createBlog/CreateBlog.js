import React, { useState } from 'react';
import './CreateBlog.css';
import axios from 'axios';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        author:'',
        content: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the necessary actions with the form data
        console.log(formData);
        axios.post('http://127.0.0.1:8080/api/v1/blogs', formData)
            .then(response => {
                window.alert('Post created');
                handleReset()
            })
            .catch(error => {
                window.alert('Error creating post:', error);
            });
    };

    const handleReset = () => {
        setFormData({
            title: '',
            date: '',
            author:'',
            content: ''
        });
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Create a New Blog</h1>
            <form className="blog-form" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="text" id="date" name="date" value={formData.date} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleInputChange}></textarea>
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
