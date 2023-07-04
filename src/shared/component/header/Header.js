import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
    HomeOutlined,
    UnorderedListOutlined,
    AliwangwangOutlined
} from '@ant-design/icons';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
const { Header, Content } = Layout;

const items = [
    {
        label: 'Home',
        key: '',
        icon: <HomeOutlined />,
    },
    {
        label: 'Blogs',
        key: 'blogs',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'About Us',
        key: 'about-us',
        icon: <AliwangwangOutlined />
    }
];

const HeaderMenu = ({ Callback, Current, ...props }) => {
    let auth = JSON.parse(localStorage.getItem("userAccess"));
    return (
        <div style={{width:'100%'}}>
            <ul className="header-menu">
                {items.map(item => (
                    <li key={item.key} className={Current === item.key ? 'active' : ''}>
                        <NavLink  to={`/${item.key}`} className='text-dec'>
                            {item.label}
                        </NavLink >
                    </li>
                ))}
                {auth &&  <li  >
                    <NavLink  to={`/create`} className='text-dec'>
                            Add Blogs
                        </NavLink >
                </li>}
                <li className='end' >
                    {auth?<div>Hii User, <span onClick={_=>localStorage.clear()}><a>Logout</a></span></div>:<NavLink  to="/login" className=' text-dec'>Login</NavLink >}
                </li>
            </ul>
        </div>
    );
};

export default HeaderMenu;