import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { login } from '../../redux/auth-reducer';

export default compose(
  connect(null, {
    login,
  }),
  reduxForm({ form: 'loginForm' })
)(Login);
