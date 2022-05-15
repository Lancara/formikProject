import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/announcementFirst' className = { navData => navData.isActive ? classes.active : classes.item }>Announcement first</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/announcementSecond' className = { navData => navData.isActive ? classes.active : classes.item }>Announcement second</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/displayAnnouncement' className = { navData => navData.isActive ? classes.active : classes.item }>Display</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;