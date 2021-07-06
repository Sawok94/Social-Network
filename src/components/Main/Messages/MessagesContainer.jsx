import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { getUserProfile } from '../../../redux/users-reducer';
import {
  getUsersCurrentPage,
  getUsersProfiles,
  getUsersSearchFriends,
  getUsersSearchName,
  getUsersSizePage,
} from '../../../selectors/users-selectors';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    profiles: getUsersProfiles(state),
    currentPage: getUsersCurrentPage(state),
    sizePage: getUsersSizePage(state),
    searchName: getUsersSearchName(state),
    searchFriends: getUsersSearchFriends(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
  }),
  withRouter,
  withAuthRedirect
)(Messages);
