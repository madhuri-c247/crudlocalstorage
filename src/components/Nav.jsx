import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='main-nav-div d-flex-r'>
            <div className='inner-nav-div d-flex-r'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/edit'>Edit</NavLink>
                <NavLink to='/add'>Add </NavLink>
            </div> 
        </div>
    );
}

export default Nav;
