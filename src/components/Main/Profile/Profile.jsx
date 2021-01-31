import React, { useEffect } from 'react';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import style from '../Profile/Profile.module.css';
import Friends from './Friends/Friends';
import Info from './Info/Info';
import Photo from './Photo/Photo';
import Wall from './Wall/Wall';

const Profile = (props) => {
  useEffect(() => {
    props.getProfile(props.match.params.userId || 2);
  }, []);

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={style.container}>
      <Photo photo={props.profile.photos.large} />
      <Info />
      <Wall
        deletePost={props.deletePost}
        addPost={props.addPost}
        posts={props.posts}
        profilePhoto={props.profile.photos.small}
      />
      <Friends />
    </div>
  );
};

export default Profile;
