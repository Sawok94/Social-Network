import React from 'react';
import { connect } from 'react-redux';
import { deAuthMe } from '../../redux/auth-reducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};

export default connect(mapStateToProps, {deAuthMe})(Header);
