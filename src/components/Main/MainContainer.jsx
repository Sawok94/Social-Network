import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/users-reducer.js';
import {
  getUsersCurrentPage,
  getUsersProfiles,
  getUsersSearchFriends,
  getUsersSearchName,
  getUsersSizePage,
} from '../../selectors/users-selectors.js';
import Main from './Main.jsx';

const mapStateToProps = (state) => {
  return {
    profiles: getUsersProfiles(state),
    currentPage: getUsersCurrentPage(state),
    sizePage: getUsersSizePage(state),
    searchName: getUsersSearchName(state),
    searchFriends: getUsersSearchFriends(state),
  };
};

export default connect(mapStateToProps, {
  getUserProfile,
})(Main);
