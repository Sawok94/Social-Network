import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../../redux/messages-reducer';
import ListMessages from './ListMessages';

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps, { addMessage })(ListMessages);
