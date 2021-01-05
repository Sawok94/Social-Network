import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../../redux/messages-reducer';
import { addChar } from '../../../../redux/posts-reducer';
import ListMessages from './ListMessages';

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    textMessage: state.messages.textMessage,
  };
};

export default connect(mapStateToProps, { addMessage, addChar })(ListMessages);
