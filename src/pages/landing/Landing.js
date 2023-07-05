import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="title">Welcome to our Community.</h1>
        <p className="subtitle">Explore and share your thoughts</p>
      </header>
      <main className="content">
        <h2 className="section-title">Discover</h2>
        <p className="section-description">Find interesting blog posts on various topics.</p>
        <h2 className="section-title">Create</h2>
        <p className="section-description">Share your knowledge and experiences by creating your own blog posts.</p>
        <h2 className="section-title">Connect</h2>
        <p className="section-description">Connect with other writers and readers, and engage in meaningful discussions.</p>
      </main>
    </div>
  );
};

export default Landing;
