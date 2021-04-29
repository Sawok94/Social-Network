import React from 'react';
import style from '../Header/Header.module.css';
import logo from '../../assets/logo.jpg';
import Avatar from '../../utils/OverallComponents/Avatar/Avatar';

const Header = (props) => {
  return (
    <div className={style.header}>
      {console.log(props)}
      <img src={logo} className={style.header_img} alt='logo' />
      <details className={style.header_accordion}>
        <summary>
          <div className={style.header_accordion_auth}>
            <div className={style.header_accordion_auth_name}>
              {1 || props.auth.login}
            </div>
            <div className={style.header_accordion_auth_avatar}>
              <Avatar style='avatar__small' />
            </div>
            <div className={style.header_accordion_auth_arrow}> &#8249;</div>
          </div>
        </summary>
        <div className={style.header_accordion_exit} onClick={props.deAuthMe()}>
          Выход
        </div>
      </details>
    </div>
  );
};
NavLin
export default Header;
