import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getAuthMe } from '../../../redux/auth-reducer';
import {
  addPost,
  deletePost,
  getMyStatus,
  getProfile,
  updateMyStatus,
} from '../../../redux/profiles-reducer';
import { getUserProfile } from '../../../redux/users-reducer';
import { getAuthId, getIsAuth } from '../../../selectors/auth-selectors';
import { getProfilesPosts, getProfilesProfile, getProfilesStatus } from '../../../selectors/profiles-selectors';
import {
  getUsersCurrentPage,
  getUsersProfiles,
  getUsersSearchFriends,
  getUsersSearchName,
} from '../../../selectors/users-selectors';
import Profile from './Profile';

const mapStateToProps = (state) => {
  return {
    posts: getProfilesPosts(state),
    profile: getProfilesProfile(state),
    status: getProfilesStatus(state),
    profiles: getUsersProfiles(state),
    currentPage: getUsersCurrentPage(state),
    searchName: getUsersSearchName(state),
    searchFriends: getUsersSearchFriends(state),
    id: getAuthId(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    deletePost,
    getProfile,
    getUserProfile,
    getAuthMe,
    updateMyStatus,
    getMyStatus,
  }),
  withRouter,
  withAuthRedirect
)(Profile);
