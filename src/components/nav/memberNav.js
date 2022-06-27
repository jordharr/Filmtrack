import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { auth } from "../../firebase";

function memberNav() {

    return (
        <nav className="navbar bg-base-200 text-base-content">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl"><Icon icon="heroicons-solid:film" /> &nbsp; Filmtrack</Link>
            </div>
            <div className="navbar-middle">
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'btn btn-ghost btn-active mr-2 hidden lg:flex' : 'btn btn-ghost mr-2 hidden lg:flex')}>
                    Dashboard
                </NavLink>
                <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost">
                Movies
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? 'btn btn-ghost btn-active mr-2 hidden lg:flex' : 'btn btn-ghost mr-2 hidden lg:flex')}>
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? 'btn btn-ghost btn-active mr-2 hidden lg:flex' : 'btn btn-ghost mr-2 hidden lg:flex')}>
                        Upcoming
                    </NavLink>
                </li>
                </ul>
            </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-circle">
                    <Icon icon="heroicons-solid:user" width="25" />
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className="btn btn-ghost">My Account</a></li>
                    <li><a className="btn btn-ghost" onClick={() => auth.signOut()}>Log Out</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'btn btn-ghost btn-active mb-2' : 'btn btn-ghost mb-2')}>Dashboard</NavLink></li>
                        <li><NavLink to="/movies" className={({ isActive }) => (isActive ? 'btn btn-ghost btn-active mb-2' : 'btn btn-ghost mb-2')}>Movies</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default memberNav;