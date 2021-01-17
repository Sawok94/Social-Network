import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../../redux/posts-reducer';
import Wall from './Wall';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps, { addPost })(Wall);