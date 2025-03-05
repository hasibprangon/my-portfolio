import React, { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import logo from '../assets/company/logo1.png'
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks.map((link) => (
                <li
                  key={link?.id}
                  className={
                    `${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer`
                  }
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("")
              window.scrollTo(0, 0)
            }}
          >
            <img src={logo} alt="logo" className='w-20 object-contain' />
            <p className='text-white text-lg font-bold cursor-pointer flex gap-1'>
              <span>
                Md Hasibul Hossain 
              </span>
              <span className='sm:block hidden'>|| Full Stack Js developer</span>
            </p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li
                key={link?.id}
                className={
                  `${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer`
                }
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div >
    </nav>

  );
};

export default Navbar;