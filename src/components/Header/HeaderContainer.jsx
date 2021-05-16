import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { logout })(Header);
