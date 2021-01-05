import React from 'react';
import { connect } from 'react-redux';
import { addChar, addPost } from '../../../../redux/posts-reducer';
import Wall from './Wall';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    textPost: state.posts.textPost,
  };
};

export default connect(mapStateToProps, { addPost, addChar })(Wall);
