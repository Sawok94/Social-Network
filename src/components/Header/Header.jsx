import React, { useState } from 'react';
import style from '../Header/Header.module.css';
import logo from '../../assets/logo.png';
import Avatar from '../../utils/OverallComponents/Avatar/Avatar';
import { NavLink, Redirect } from 'react-router-dom';
import exitImg from '../../assets/exit.png';

const Header = (props) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <header className={style.header}>
      <NavLink to={'/profile'}>
        <img
          width='70'
          height='33'
          src={logo}
          className={style.header_logo}
          alt='logoImg'
        />
      </NavLink>
      {props.isAuth && props.profile && (
        <section className={style.header_accordion}>
          <div
            className={style.header_accordion_auth_block}
            onMouseEnter={() => {
              setEditMode(true);
            }}
            onMouseLeave={() => {
              setEditMode(false);
            }}
          >
            <h1 className={style.header_accordion_auth_name}>{props.login}</h1>
            <figure className={style.header_accordion_auth_avatar}>
              <Avatar
                photo={props.profile.photos.small}
                style={`avatar__small`}
              />
            </figure>
            <span className={style.header_accordion_auth_arrow}>
              <b>&#8249;</b>
            </span>
          </div>
          {editMode && (
            <aside
              className={style.header_accordion_exit}
              onMouseEnter={() => {
                setEditMode(true);
              }}
              onMouseLeave={() => {
                setEditMode(false);
              }}
              onClick={() => {
                setEditMode(false);
                props.logout();
              }}
            >
              <img src={exitImg} alt='exitImg' />
              <NavLink
                className={style.header_accordion_exitLink}
                to={'/login'}
              >
                Выход
              </NavLink>
            </aside>
          )}
        </section>
      )}
    </header>
  );
};

export default Header;
