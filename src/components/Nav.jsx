import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';
import logo from '../assests/logo.jpg'

const Nav = () => {
    return (
        <div className='main-nav-div d-flex-r'>
            <div className='inner-nav-div d-flex-r'>
                <h3 className='logo'>CRUD</h3>
                <div className='menu-div'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/add'>Add </NavLink>
                </div>
            </div> 
        </div>
    );
}

export default Nav;
