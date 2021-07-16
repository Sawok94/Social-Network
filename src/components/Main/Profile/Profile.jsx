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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.userId]);

  if (!props.profile) {
    return <Preloader />;
  }

  if (!props.myProfile) {
    return <Preloader />;
  }

  if (!props.isAuth) {
    <Redirect to={'/login'} />;
  }

  return (
    <main className={style.profile}>
      <Photo
        isOwner={!props.match.params.userId}
        photo={props.profile.photos.large}
      />
      <Info
        isOwner={!props.match.params.userId}
        info={props.profile}
        updateMyStatus={props.updateMyStatus}
        status={props.status}
        myId={props.id}
      />
      
      <Wall
        urlId={props.match.params.userId}
        deletePost={props.deletePost}
        addPost={props.addPost}
        posts={props.posts}
        login={props.login}
        profilePhoto={props.profile.photos.small}
        profileMyPhoto={props.myProfile.photos.small}
      />

      <Friends myFriendsProfile={props.myFriendsProfile} />
    </main>
  );
};

export default Profile;
