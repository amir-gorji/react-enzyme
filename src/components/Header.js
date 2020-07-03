import React from 'react';
import './styles.scss';
import logo from '../assets/logo.png'

let Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header;