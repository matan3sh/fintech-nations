import React, { useState, useEffect } from 'react';

import logo from 'assets/images/logo.svg';

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navOnScroll = () => {
    if (window.scrollY >= 80) setOnScroll(true);
    else setOnScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navOnScroll);
    return () => {
      window.removeEventListener('scroll', navOnScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar ${onScroll ? 'on-scroll' : ''}`}>
        <a className='navbar-logo' href='#Home'>
          <img className='logo' src={logo} alt='logo' />
          <h1>
            Fintech<span>Nations</span>
          </h1>
        </a>
        <div
          onClick={() => setMobileMenu((prev) => !prev)}
          className={`menu-toggle ${mobileMenu ? 'is-active' : ''}`}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <ul className={`nav-menu ${mobileMenu ? 'mobile-active' : ''}`}>
          <li>
            <a
              href='#Home'
              className='nav-links'
              onClick={() => setMobileMenu(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#About'
              className='nav-links'
              onClick={() => setMobileMenu(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#Our-Partners'
              className='nav-links'
              onClick={() => setMobileMenu(false)}
            >
              Our Partners
            </a>
          </li>
          <li>
            <a href='#/' className='nav-links'>
              Hackathon
            </a>
          </li>
          <li>
            <a href='#/' className='nav-links'>
              Prizes
            </a>
          </li>
          <li>
            <a
              href='#Our-Judges'
              className='nav-links'
              onClick={() => setMobileMenu(false)}
            >
              Judges
            </a>
          </li>
          <li>
            <a
              href='#Our-Speakers'
              className='nav-links'
              onClick={() => setMobileMenu(false)}
            >
              Speakers
            </a>
          </li>
          <li>
            <a
              href='#/'
              className={`nav-links ${
                mobileMenu ? 'nav-mobile-btn' : 'nav-links-btn'
              } `}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
