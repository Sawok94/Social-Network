import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { login } from '../../redux/auth-reducer';
import { getCaptchaImg, getIsAuth } from '../../selectors/auth-selectors';

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state),
    captcha: getCaptchaImg(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    login,
  }),
  reduxForm({ form: 'loginForm' })
)(Login);
