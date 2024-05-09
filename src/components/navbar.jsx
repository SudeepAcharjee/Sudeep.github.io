import React from 'react'
function Navbar() {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <button className="navbar-link  active" >
          <a href='/'>About</a>
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
         <a href='./resume'>Resume</a>
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
         <a href='./portfolio'>Portfolio</a>
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
         <a href='./blog'>Blog</a>
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
          <a href='./contact'>Contact</a>
        </button>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar
