import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return(
        <div className={s.navbar}>
            <ul>
                <li>
                    <NavLink to='/'>Main</NavLink>
                </li>
                <li>
                    <NavLink to='/companies'>Companies</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;