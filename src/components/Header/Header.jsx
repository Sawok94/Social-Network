import React, { useState } from 'react';
import style from '../Header/Header.module.css';
import logo from '../../assets/logo.jpg';
import Avatar from '../../utils/OverallComponents/Avatar/Avatar';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={style.header}>
      <img src={logo} className={style.header_img} alt='logoImg' />
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
            <span className={style.header_accordion_auth_name}>
              {props.login}
            </span>
            <span className={style.header_accordion_auth_avatar}>
              <Avatar
                photo={props.profile.photos.small}
                style={`avatar__small`}
              />
            </span>
            <span className={style.header_accordion_auth_arrow}>
              <b>&#8249;</b>
            </span>
          </summary>

          <div
            className={style.header_accordion_exit}
            onClick={() => {
              setEditMode(false);
              props.logout();
            }}
          >
            <NavLink to={'/login'}>Выход</NavLink>
          </div>
        </details>
      )}
    </div>
  );
};

export default Header;
