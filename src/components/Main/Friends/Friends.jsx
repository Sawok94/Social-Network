import React from 'react';
import style from './Friends.module.css';
import border from '../Main.module.css';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';
import PageSwitching from '../../../utils/OverallComponents/PageSwitching/PageSwitching';
import FriendsProfile from './FriendsProfile/FriendsProfile';

const Friends = (props) => {
  let profilesPage =
    props.profiles === null ? (
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
      getUserProfile={props.getUserProfile}
      setCurrentPage={props.setCurrentPage}
    />
  );

  return (
    <div className={`${style.container} ${border.wrapper}`}>
      {profilesPage}
      {getUserProfile}
    </div>
  );
};

export default Friends;
