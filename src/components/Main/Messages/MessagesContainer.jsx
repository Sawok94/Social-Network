import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps, {
  getUserProfile,
})(Messages);
