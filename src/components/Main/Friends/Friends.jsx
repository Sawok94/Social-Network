import React from 'react';
import style from './Friends.module.css';
import border from '../Main.module.css';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import PageSwitching from '../../../utils/OverallComponents/PageSwitching/PageSwitching';
import FriendsProfile from './FriendsProfile/FriendsProfile';
import Search from '../../../utils/OverallComponents/Search/Search';
import noSearch from '../../../assets/noSearch.png';
import { userAPI } from '../../../api/api';

const Friends = (props) => {
  let profilesPage = !props.profiles ? (
    <Preloader />
  ) : (
    props.profiles.map((profile) => (
      <FriendsProfile
        name={profile.name}
        status={profile.status}
        key={profile.id}
      />
    ))
  );

  let getUserProfile = !props.profiles ? (
    props.getUserProfile(props.currentPage)
  ) : (
    <PageSwitching
      sizePage={props.sizePage}
      totalCount={props.totalCount}
      currentPage={props.currentPage}
      searchName={props.searchName}
      getUserProfile={props.getUserProfile}
    />
  );

  let searchProfiles = (name) => {
    props.getUserProfile(props.currentPage, props.sizePage, name.searchName);
  };

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <Search onChange={searchProfiles} />
      {profilesPage == false ? (
        <div className={style.container_error}>
          <img src={noSearch} alt='noSearchImg' />
          <span className={style.r}>Ничего не найдено. Попробуйте снова.</span>
        </div>
      ) : (
        profilesPage
      )}
      {getUserProfile}
      {/* {console.log(userAPI.followUser(12733))} */}
      {/* {console.log()} */}
    </div>
  );
};

export default Friends;
