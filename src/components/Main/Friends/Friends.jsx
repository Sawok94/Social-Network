import React from 'react';
import FriendsProfile from '../../../utils/OverallComponents/FriendsProfile/FriendsProfile';
import style from './Friends.module.css';
import border from '../Main.module.css';
import PageSwitching from './PageSwitching/PageSwitching';
import { getUserProfile } from '../../../redux/profile-reducer';

const Friends = (props) => {
  return (
    <div className={`${style.container} ${border.wrapper}`}>
      <PageSwitching />
      <FriendsProfile />
      <FriendsProfile />
      <PageSwitching />
      {props.getUserProfile()}
    </div>
  );
};

export default Friends;
