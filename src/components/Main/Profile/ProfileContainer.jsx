import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  addPost,
  deletePost,
  getProfile,
} from '../../../redux/profiles-reducer';
import Profile from './Profile';

const mapStateToProps = (state) => {
  return {
    posts: state.profiles.posts,
    profile: state.profiles.profile,
  };
};

export default compose(
  connect(mapStateToProps, { addPost, deletePost, getProfile }),
  withRouter
)(Profile);
