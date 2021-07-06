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
import { getMyProfile, showMyFriends } from '../../../selectors/app-selectors ';
import {
  getAuthId,
  getAuthLogin,
  getIsAuth,
} from '../../../selectors/auth-selectors';
import {
  getProfilesPosts,
  getProfilesProfile,
  getProfilesStatus,
} from '../../../selectors/profiles-selectors';
import Profile from './Profile';

const mapStateToProps = (state) => {
  return {
    posts: getProfilesPosts(state),
    profile: getProfilesProfile(state),
    myProfile: getMyProfile(state),
    status: getProfilesStatus(state),
    id: getAuthId(state),
    isAuth: getIsAuth(state),
    login: getAuthLogin(state),
    myFriendsProfile: showMyFriends(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    deletePost,
    getProfile,
    getAuthMe,
    updateMyStatus,
    getMyStatus,
  }),
  withRouter,
  withAuthRedirect
)(Profile);
