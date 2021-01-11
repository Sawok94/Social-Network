import React from 'react';
import style from './Friends.module.css';
import border from '../Main.module.css';
import PageSwitching from './PageSwitching/PageSwitching';
import FriendsProfile from '../../../utils/OverallComponents/FriendsProfile/FriendsProfile';
import Preloader from '../../../utils/OverallComponents/Preloader/Preloader';

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
    props.getUserProfile()
  ) : (
    <PageSwitching
      getTotalCount={props.getTotalCount}
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
      {/* {console.log(props)} */}
    </div>
  );
};

export default Friends;
