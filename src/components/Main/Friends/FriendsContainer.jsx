import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import {
  followUser,
  getUserProfile,
  unfollowUser,
} from '../../../redux/users-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
  return {
    profiles: state.users.profiles,
    currentPage: state.users.currentPage,
    sizePage: state.users.sizePage,
    totalCount: state.users.totalCount,
    searchName: state.users.searchName,
    searchFriends: state.users.searchFriends,
    followingInProgress: state.users.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(Friends);
