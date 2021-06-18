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
import {
  getUsersCurrentPage,
  getUsersFollowingInProgress,
  getUsersProfiles,
  getUsersSearchFriends,
  getUsersSearchName,
  getUsersSizePage,
  getUsersTotalCount,
} from '../../../selectors/users-selectors';

const mapStateToProps = (state) => {
  return {
    profiles: getUsersProfiles(state),
    currentPage: getUsersCurrentPage(state),
    sizePage: getUsersSizePage(state),
    totalCount: getUsersTotalCount(state),
    searchName: getUsersSearchName(state),
    searchFriends: getUsersSearchFriends(state),
    followingInProgress: getUsersFollowingInProgress(state),
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
