import React from 'react';
import { connect } from 'react-redux';
import { deAuthMe } from '../../redux/auth-reducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {deAuthMe})(Header);
