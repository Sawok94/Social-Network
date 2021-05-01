import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addAuthMe } from '../../../redux/auth-reducer';
import {
  addPost,
  deletePost,
  getProfile,
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
    auth: state.auth.auth,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    deletePost,
    getProfile,
    getUserProfile,
    addAuthMe,
  }),
  withRouter
)(Profile);
