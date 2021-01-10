import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
  };
};

export default connect(mapStateToProps, { getUserProfile })(Friends);
