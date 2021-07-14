import React from 'react';
import style from '../../Messages/ListFriends/ListFriends.module.css';
import FriendsProfileMessages from './FriendsProfileMessages/FriendsProfileMessages';

const ListFriends = (props) => {
  return (
    <article className={style.listFriends}>
      <ul>
        {props.profiles &&
          props.profiles.map((profile) => {
            return (
              <FriendsProfileMessages
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

export default ListFriends;
