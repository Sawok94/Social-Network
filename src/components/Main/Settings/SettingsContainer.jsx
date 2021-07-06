import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
  updateProfileInfo,
  updateAvatarPhoto,
  getProfileSettings,
} from '../../../redux/profiles-reducer';
import { getAuthId } from '../../../selectors/auth-selectors';
import {
  getProfilesProfileSetting,
  getProfilesUpdateAvatar,
  getProfilesUpdateInfo,
} from '../../../selectors/profiles-selectors';
import Settings from './Settings';

const mapStateToProps = (state) => {
  return {
    profileForSettings: getProfilesProfileSetting(state),
    updateAvatar: getProfilesUpdateAvatar(state),
    updateInfo: getProfilesUpdateInfo(state),
    myId: getAuthId(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    updateAvatarPhoto,
    updateProfileInfo,
    getProfileSettings,
  }),
  withAuthRedirect
)(Settings);
