import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import style from '../Profile/Profile.module.css';
import Friends from './Friends/Friends';
import Info from './Info/Info';
import Photo from './Photo/Photo';
import Wall from './Wall/Wall';

const Profile = (props) => {
  useEffect(() => {
    let id = props.match.params.userId || props.id;
    props.getProfile(id);
    props.getMyStatus(id);
  }, []);

  if (!props.profile) {
    return <Preloader />;
  }

  if (!props.isAuth) {
    <Redirect to={'/login'} />;
  }

  return (
    <div className={style.container}>
      <Photo photo={props.profile.photos.large} />
      <Info
        info={props.profile}
        updateMyStatus={props.updateMyStatus}
        status={props.status}
        myId={props.id}
      />
      <Wall
        deletePost={props.deletePost}
        addPost={props.addPost}
        posts={props.posts}
        profilePhoto={props.profile.photos.small}
      />
      <Friends
        getUserProfile={props.getUserProfile}
        currentPage={props.currentPage}
        searchName={props.searchName}
        searchFriends={props.searchFriends}
        profiles={props.profiles}
      />
    </div>
  );
};

export default Profile;
