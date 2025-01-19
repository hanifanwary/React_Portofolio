import React, { useEffect } from 'react';
import { Link } from 'react-scroll';



const Navbar = () => {

  

  return (
    <nav className="flex justify-center">
      <div className="navbar bg-[#0F5257] w-[80vw] text-white my-3 rounded absolute z-50">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li>
              <Link to="home" smooth={true} duration={500} className='hover:text-[#9C92A3]'>HOME</Link>
              </li>
              <li>
              <Link to="about" smooth={true} duration={500} className='hover:text-[#9C92A3]'>ABOUT</Link>
              </li>
              <li>
              <Link to="projects" smooth={true} duration={500} className='hover:text-[#9C92A3]'>PROJECT</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Navbar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link to="home" smooth={true} duration={500} className='hover:text-[#9C92A3]'>HOME</Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500} className='hover:text-[#9C92A3]'>ABOUT</Link>
            </li>
            <li>
            <Link to="projects" smooth={true} duration={500} className='hover:text-[#9C92A3]'>PROJECT</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <Link to="contact" smooth={true} duration={500} className="btn btn-primary hover:text-[#bfb5c7]">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;