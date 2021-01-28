import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import {
  followUser,
  getUserProfile,
  unfollowUser,
} from '../../../redux/users-reducer';

const mapStateToProps = (state) => {
  return {
    profiles: state.users.profiles,
    currentPage: state.users.currentPage,
    sizePage: state.users.sizePage,
    totalCount: state.users.totalCount,
    searchName: state.users.searchName,
    searchFriends: state.users.searchFriends,
  };
};

export default connect(mapStateToProps, {
  getUserProfile,
  followUser,
  unfollowUser,
})(Friends);
