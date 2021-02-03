import React from 'react';
import style from '../Header/Header.module.css'
import logo from '../../assets/logo.jpg'

const Header = (props) => {
  return (
  <div className={style.header}><img src={logo} className={style.img} alt="logo"/></div>
  );
};

export default Header;
