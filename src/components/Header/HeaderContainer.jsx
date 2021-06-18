import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { getAuthLogin, getIsAuth } from '../../selectors/auth-selectors';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    login: getAuthLogin(state),
    isAuth: getIsAuth(state),
  };
};

export default connect(mapStateToProps, { logout })(Header);
