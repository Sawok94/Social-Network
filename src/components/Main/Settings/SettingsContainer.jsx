import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
  updateProfileInfo,
  updateAvatarPhoto,
} from '../../../redux/profiles-reducer';
import { getAuthId } from '../../../selectors/auth-selectors';
import {
  getProfilesProfile,
  getProfilesUpdateAvatar,
  getProfilesUpdateInfo,
} from '../../../selectors/profiles-selectors';
import Settings from './Settings';

const mapStateToProps = (state) => {
  return {
    profile: getProfilesProfile(state),
    updateAvatar: getProfilesUpdateAvatar(state),
    updateInfo: getProfilesUpdateInfo(state),
    myId: getAuthId(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    updateAvatarPhoto,
    updateProfileInfo,
  }),
  withAuthRedirect
)(Settings);
