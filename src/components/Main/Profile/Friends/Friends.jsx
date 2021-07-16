import React from 'react';
import style from '../Friends/Friends.module.css';
import border from '../../Main.module.css';
import FriendsProfile from './FriendsProfile/FriendsProfile';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
  return (
    <article className={`${style.friends} ${border.wrapper}`}>
      <NavLink to={'/friends'} className={style.friends_title_link}>
        <div className={style.friends_title}> Друзья</div>
      </NavLink>
      <ul className={style.profiles}>
        {props.myFriendsProfile &&
          props.myFriendsProfile.map((profile) => {
            return (
              <FriendsProfile
                key={profile.id}
                id={profile.id}
                name={profile.name}
                photo={profile.photos.small}
              />
            );
          })}
      </ul>
    </article>
  );
};

export default Friends;
