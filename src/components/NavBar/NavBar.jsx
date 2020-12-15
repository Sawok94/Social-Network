import React from 'react';
import style from '../NavBar/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/user.png';
import newsIcon from '../../assets/news.png';
import messagesIcon from '../../assets/messages.png';
import friendsIcon from '../../assets/friends.png';
import musicIcon from '../../assets/music.png';
import videoIcon from '../../assets/video.png';
import settingsIcon from '../../assets/settings.png';

const NavBar = (props) => {
  return (
    <nav className={style.nav}>
      <NavLink to='/profile' activeClassName={style.activeLink}>
        <img src={userIcon} alt='userIcon' />
        Мой профиль
      </NavLink>
      <NavLink to='/news' activeClassName={style.activeLink}>
        <img src={newsIcon} alt='newsIcon' />
        Новости
      </NavLink>
      <NavLink to='/messages' activeClassName={style.activeLink}>
        <img src={messagesIcon} alt='messagesIcon' />
        Сообщения
      </NavLink>
      <NavLink to='/friends' activeClassName={style.activeLink}>
        <img src={friendsIcon} alt='friendsIcon' />
        Друзья
      </NavLink>
      <NavLink to='/music' activeClassName={style.activeLink}>
        <img src={musicIcon} alt='musicIcon' />
        Музыка
      </NavLink>
      <NavLink to='/video' activeClassName={style.activeLink}>
        <img src={videoIcon} alt='videoIcon' />
        Видио
      </NavLink>
      <NavLink to='/settings' activeClassName={style.activeLink}>
        <img src={settingsIcon} alt='settingsIcon' />
        Настройки
      </NavLink>
    </nav>
  );
};

export default NavBar;
