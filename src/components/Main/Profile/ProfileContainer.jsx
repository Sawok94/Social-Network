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
import Profile from './Profile';

const mapStateToProps = (state) => {
  return {
    posts: state.profiles.posts,
    profile: state.profiles.profile,
    profiles: state.users.profiles,
    currentPage: state.users.currentPage,
    searchName: state.users.searchName,
    searchFriends: state.users.searchFriends,
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.profiles.status,
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
