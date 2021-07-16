import React, { useState } from 'react';
import style from '../Header/Header.module.css';
import logo from '../../assets/logo.png';
import Avatar from '../../utils/OverallComponents/Avatar/Avatar';
import { NavLink } from 'react-router-dom';
import exitImg from '../../assets/exit.png';

const Header = (props) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <header className={style.header}>
      <img width='70' height='33' src={logo} className={style.header_img} alt='logoImg' />
      {props.isAuth && props.profile && (
        <details
          className={style.header_accordion}
          onMouseEnter={() => {
            setEditMode(true);
          }}
          onMouseLeave={() => {
            setEditMode(false);
          }}
          open={editMode}
        >
          <summary className={style.summary}>
            <h1 className={style.header_accordion_auth_name}>
              <b>{props.login}</b>
            </h1>
            <figure className={style.header_accordion_auth_avatar}>
              <Avatar
                photo={props.profile.photos.small}
                style={`avatar__small`}
              />
            </figure>
            <span className={style.header_accordion_auth_arrow}>
              <b>&#8249;</b>
            </span>
          </summary>
          <aside
            className={style.header_accordion_exit}
            onClick={() => {
              setEditMode(false);
              props.logout();
            }}
          >
            <img src={exitImg} alt='exitImg' />
            <NavLink className={style.header_accordion_exitLink} to={'/login'}>
              Выход
            </NavLink>
          </aside>
        </details>
      )}
    </header>
  );
};

export default Header;
