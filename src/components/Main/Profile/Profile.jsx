import React, { Profiler } from 'react';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import style from '../Profile/Profile.module.css';
import Friends from './Friends/Friends';
import Info from './Info/Info';
import Photo from './Photo/Photo';
import Wall from './Wall/Wall';

const Profile = (props) => {
  if (!props.profile) {
    props.getProfile(props.match.params.userId || 2);
  }

  const photo = !props.profile ? <Preloader /> : props.profile.photos.large;

  return (
    <div className={style.container}>
      <Photo photo={photo} />
      <Info />
      <Wall {...props} />
      <Friends />
      {console.log(props)}
    </div>
  );
};

export default Profile;
