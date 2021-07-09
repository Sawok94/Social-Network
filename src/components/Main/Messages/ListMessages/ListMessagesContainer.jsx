import { connect } from 'react-redux';
import { getMyProfile } from '../../../../selectors/app-selectors ';
import { getAuthLogin } from '../../../../selectors/auth-selectors';
import { getMessages } from '../../../../selectors/messages-selectors ';
import ListMessages from './ListMessages';

const mapStateToProps = (state) => {
  return {
    messages: getMessages(state),
    login: getAuthLogin(state),
    profile: getMyProfile(state),
  };
};

export default connect(mapStateToProps)(ListMessages);
