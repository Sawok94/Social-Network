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
import { getAuthId, getIsAuth } from '../../../selectors/auth-selectors';
import {
  getProfilesPosts,
  getProfilesProfile,
  getProfilesStatus,
  showMyFriends,
} from '../../../selectors/profiles-selectors';
import Profile from './Profile';

const mapStateToProps = (state) => {
  return {
    posts: getProfilesPosts(state),
    profile: getProfilesProfile(state),
    status: getProfilesStatus(state),
    id: getAuthId(state),
    isAuth: getIsAuth(state),
    myFriendsProfile: showMyFriends(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    deletePost,
    getProfile,
    getAuthMe,
    updateMyStatus,
    getMyStatus,
  }),
  withRouter,
  withAuthRedirect
)(Profile);
