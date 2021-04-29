import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserProfile } from '../../../redux/users-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    profiles: state.users.profiles,
    currentPage: state.users.currentPage,
    sizePage: state.users.sizePage,
    searchName: state.users.searchName,
    searchFriends: state.users.searchFriends,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
  }),
  withRouter
)(Messages);
