import React from 'react';
import reactLogo from '../assets/react.svg'
import '../index.css'

function Header() {
    return (
        <header className="header">
          <div className = 'logo-container'>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1><a className="pageTitle" href="https://reactjs.org" target="_blank" rel="noreferrer">ReactFacts</a></h1>
          </div>
          <div className = 'extra-title'>
            <p>React Course - Project 1</p>
          </div>
      </header>
    )
}

export default Header;