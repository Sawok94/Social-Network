import React from 'react';
import style from '../Profile/Profile.module.css';
import Friends from './Friends/Friends';
import Info from './Info/Info';
import Photo from './Photo/Photo';
import Wall from './Wall/Wall';

const Profile = (props) => {
  return (
    <div className={style.container}>
      <Photo />
      <Info />
      <Wall addPost={props.addPost} posts={props.posts} />
      <Friends />
    </div>
  );
};

export default Profile;
