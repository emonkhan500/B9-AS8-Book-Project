import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const links=<>
    <li><NavLink  to='/'>Home</NavLink></li>
    <li><NavLink to='/listedBook'>Listed Books</NavLink></li>
    <li><NavLink to='/pagesToRead'>Pages to Read</NavLink></li>
    <li><NavLink to='/bookCollection'>Book collection</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className='mt-8 mb-10 work'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <a className=" text-black text-2xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {
            links
        }
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="text-white btn btn-success">Sign In</a>
    <a className="text-white btn btn-info">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Nav;