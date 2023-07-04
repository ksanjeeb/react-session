import React from 'react';
import Footer from '../shared/component/footer/Footer';
import HeaderMenu from '../shared/component/header/Header';
import { HashRouter as HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Landing from './landing/Landing';
import Login from './login/Login';
import Blogs from './blogs/Blogs';
import Blog from './blog/Blog';
import ProtectedRoute from '../shared/utility/ProtectedUtils';
import CreateBlog from './createBlog/CreateBlog';
import About from './about/About';
const PagesRouting = () => {
    const routeTo = (route) => {
        console.log(route)
    }

    return (
        <div id="root">
            <HeaderMenu Current={'home'} Callback={key => routeTo(key)} />
            <div className='container-root'>
                {/* <HashRouter> */}
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/blogs" element={<Blogs />} />
                        <Route exact path="/blogs/:id" element={<Blog />} />
                        <Route exact path="/about-us" element={<About />} />
                        <Route  element={<ProtectedRoute />}>
                            <Route exact path="/create" element={<CreateBlog />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                {/* </HashRouter> */}

            </div>
            <Footer />
        </div>
    );
};

export default PagesRouting;


export const NotFound = () => {
    return (<div className='page-not-found'>Page Not Found</div>)
}