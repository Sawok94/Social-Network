import React from 'react';
import style from './Friends.module.css';
import border from '../Main.module.css';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import PageSwitching from '../../../utils/OverallComponents/PageSwitching/PageSwitching';
import FriendsProfile from './FriendsProfile/FriendsProfile';
import Search from '../../../utils/OverallComponents/Search/Search';
import noSearch from '../../../assets/noSearch.png';

const Friends = (props) => {
  let followUser = (userId) => {
    props.followUser(userId);
  };

  let unfollowUser = (userId) => {
    props.unfollowUser(userId);
  };
  let profilesPage = !props.profiles ? (
    <Preloader />
  ) : (
    props.profiles.map((profile) => (
      <FriendsProfile
        name={profile.name}
        status={profile.status}
        key={profile.id}
        id={profile.id}
        photos={profile.photos}
        followed={profile.followed}
        followUser={followUser}
        unfollowUser={unfollowUser}
      />
    ))
  );

  let getUserProfile = !props.profiles ? (
    props.getUserProfile(
      props.currentPage,
      props.sizePage,
      props.searchName,
      props.searchFriends
    )
  ) : (
    <PageSwitching
      sizePage={props.sizePage}
      totalCount={props.totalCount}
      currentPage={props.currentPage}
      searchName={props.searchName}
      searchFriends={props.searchFriends}
      getUserProfile={props.getUserProfile}
    />
  );

  let searchProfiles = (name) => {
    props.getUserProfile(
      props.currentPage,
      props.sizePage,
      name.searchName,
      props.searchFriends
    );
  };

  let showMyFriends = () => {
    props.getUserProfile(
      props.currentPage,
      props.sizePage,
      props.searchName,
      true
    );
  };

  let searchFriends = () => {
    props.getUserProfile(
      props.currentPage,
      props.sizePage,
      props.searchName,
      false
    );
  };

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      {console.log(props)}
      <Search onChange={searchProfiles} />
      <div className={style.friendsSwither}>
        <button
          onClick={showMyFriends}
          className={`${style.friendsSwither__btn} ${
            props.searchFriends && style.active
          }`}
        >
          Мои друзья
        </button>
        <button
          onClick={searchFriends}
          className={`${style.friendsSwither__btn} ${
            !props.searchFriends && style.active
          }`}
        >
          Поиск друзей
        </button>
      </div>

      {profilesPage == false ? (
        <div className={style.container_error}>
          <img src={noSearch} alt='noSearchImg' />
          <span className={style.r}>Ничего не найдено. Попробуйте снова.</span>
        </div>
      ) : (
        profilesPage
      )}
      {getUserProfile}
    </div>
  );
};

export default Friends;
