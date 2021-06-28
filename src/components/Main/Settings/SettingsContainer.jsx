import React from 'react';
import { connect } from 'react-redux';
import { uploadAvatarPhoto } from '../../../redux/profiles-reducer';
import { getProfilesProfile } from '../../../selectors/profiles-selectors';
import Settings from './Settings';

const mapStateToProps = (state) => {
  return {
    profile: getProfilesProfile(state),
  };
};

export default connect(mapStateToProps, { uploadAvatarPhoto })(Settings);
