import React from 'react';
import style from './Friends.module.css';
import border from '../Main.module.css';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import PageSwitching from '../../../utils/OverallComponents/PageSwitching/PageSwitching';
import FriendsProfile from './FriendsProfile/FriendsProfile';
import Search from '../../../utils/OverallComponents/Search/Search';

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
      {profilesPage}
      {getUserProfile}
    </div>
  );
};

export default Friends;
