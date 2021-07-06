import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { getMyProfile } from '../../selectors/app-selectors ';
import { getAuthLogin, getIsAuth } from '../../selectors/auth-selectors';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    login: getAuthLogin(state),
    isAuth: getIsAuth(state),
    profile: getMyProfile(state),
  };
};

export default connect(mapStateToProps, { logout })(Header);
