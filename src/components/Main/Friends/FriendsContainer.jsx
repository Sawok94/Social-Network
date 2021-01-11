import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import {
  getTotalCount,
  getUserProfile,
  setCurrentPage,
} from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles.profiles,
    currentPage: state.profiles.currentPage,
    sizePage: state.profiles.sizePage,
    totalCount: state.profiles.totalCount,
  };
};

export default connect(mapStateToProps, {
  getUserProfile,
  getTotalCount,
  setCurrentPage,
})(Friends);
