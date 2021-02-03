import React, { useEffect } from 'react';
import style from '../Friends/Friends.module.css';
import border from '../../Main.module.css';
import FriendsProfile from './FriendsProfile/FriendsProfile';

const Friends = (props) => {
  useEffect(() => {
    props.getUserProfile(
      props.currentPage,
      4,
      props.searchName,
      props.searchFriends
    );
  }, []);

  return (
    <div className={`${style.friends} ${border.wrapper}`}>
      <span className={style.title}>Друзья</span>
      <div className={style.profiles}>
        {props.profiles &&
          props.profiles.map((profile) => {
            return (
              <FriendsProfile
                key={profile.id}
                id={profile.id}
                name={profile.name}
                photo={profile.photos.small}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Friends;
