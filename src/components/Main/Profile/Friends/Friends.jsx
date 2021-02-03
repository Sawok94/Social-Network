import React, { useEffect } from 'react';
import style from '../Friends/Friends.module.css';
import border from '../../Main.module.css';
import FriendsProfile from './FriendsProfile/FriendsProfile';

const Friends = (props) => {
  useEffect(() => {
    props.getUserProfile(
      props.currentPage,
      props.sizePage,
      props.searchName,
      props.searchFriends
    );
  }, []);

  return (
    <div className={`${style.friends} ${border.wrapper}`}>
      <span>Друзья</span>
      {props.profiles &&
        props.profiles.map((profile) => {
          // for (let i = 0; (profile = 4); i++) {
            return (
              <FriendsProfile
                id={profile.id}
                name={profile.name}
                photo={profile.photos.small}
              />
            );
          // }
        })}
    </div>
  );
};

export default Friends;
