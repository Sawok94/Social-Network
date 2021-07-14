import React from 'react';
import style from './Friends.module.css';
import border from '../Main.module.css';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import PageSwitching from '../../../utils/OverallComponents/PageSwitching/PageSwitching';
import FriendsProfile from './FriendsProfile/FriendsProfile';
import Search from '../../../utils/OverallComponents/Search/Search';
import noSearch from '../../../assets/noSearch.png';

const Friends = (props) => {
  const getUserProfileFunc = (
    searchName = props.searchName,
    searchFriends = props.searchFriends
  ) => {
    return props.getUserProfile(
      props.currentPage,
      props.sizePage,
      searchName,
      searchFriends
    );
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
        followUser={(userId) => {
          props.followUser(userId);
        }}
        unfollowUser={(userId) => {
          props.unfollowUser(userId);
        }}
        followingInProgress={props.followingInProgress}
      />
    ))
  );

  return (
    <main className={`${style.friends} ${border.wrapper}`}>
      <Search
        onChange={(name) => {
          getUserProfileFunc(name.searchName);
        }}
      />

      <section className={style.friendsSwither}>
        <button
          onClick={() => {
            getUserProfileFunc(props.searchName, true);
          }}
          className={`${style.friendsSwither__btn} ${
            props.searchFriends && style.active
          }`}
        >
          Мои друзья
        </button>
        <button
          onClick={() => {
            getUserProfileFunc(props.searchName, false);
          }}
          className={`${style.friendsSwither__btn} ${
            !props.searchFriends && style.active
          }`}
        >
          Поиск друзей
        </button>
      </section>
      {profilesPage === false ? (
        <article className={style.friends_error}>
          <img
            className={style.friends_error_img}
            src={noSearch}
            alt='noSearchImg'
          />
          <span>Ничего не найдено.</span>
          <span> Попробуйте снова.</span>
        </article>
      ) : (
        <ul>{profilesPage}</ul>
      )}
      <PageSwitching
        sizePage={props.sizePage}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        searchName={props.searchName}
        searchFriends={props.searchFriends}
        getUserProfile={props.getUserProfile}
      />
    </main>
  );
};

export default Friends;
