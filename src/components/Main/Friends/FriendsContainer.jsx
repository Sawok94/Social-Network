import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import {
  getUserProfile,
} from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles.profiles,
    currentPage: state.profiles.currentPage,
    sizePage: state.profiles.sizePage,
    totalCount: state.profiles.totalCount,
    searchName: state.profiles.searchName,
    searchFriends: state.profiles.searchFriends,
  };
};
export default connect(mapStateToProps, {
  getUserProfile,
})(Friends);
