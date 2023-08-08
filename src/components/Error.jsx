import React from 'react';
import styles from './error.module.scss'
import oops from '../assests/oops.jpg'
import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
        <div className={`${styles['error-div-main']} ${styles.errorcard} d-flex`}>
            <div className='inner-div '>
           <img src={oops} alt="oops image" />
            <h4>404-Page Not Found</h4>
            <pre>The page you're looking for
                might have changed or removed.
            </pre>
            <NavLink className='m-5 p-2' to='/'>Go To Home Page</NavLink>
            </div>
        </div>
    );
}

export default Error;
