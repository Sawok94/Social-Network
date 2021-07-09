import React from 'react';
import style from '../NavBar/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/user.png';
import messagesIcon from '../../assets/messages.png';
import friendsIcon from '../../assets/friends.png';
import settingsIcon from '../../assets/settings.png';

const NavBar = (props) => {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li className={style.li}>
          <NavLink
            to='/profile'
            className={`${style.link} ${!props.isAuth && style.link_disabled}`}
            activeClassName={style.activeLink}
          >
            <img src={userIcon} alt='userIcon' />
            Мой профиль
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink
            to='/messages'
            className={`${style.link} ${!props.isAuth && style.link_disabled}`}
            activeClassName={style.activeLink}
          >
            <img src={messagesIcon} alt='messagesIcon' />
            Сообщения
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink
            to='/friends'
            className={`${style.link} ${!props.isAuth && style.link_disabled}`}
            activeClassName={style.activeLink}
          >
            <img src={friendsIcon} alt='friendsIcon' />
            Друзья
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink
            to='/settings'
            className={`${style.link} ${!props.isAuth && style.link_disabled}`}
            activeClassName={style.activeLink}
          >
            <img src={settingsIcon} alt='settingsIcon' />
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
