import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../../redux/messages-reducer';
import { getMessages } from '../../../../selectors/messages-selectors ';
import ListMessages from './ListMessages';

const mapStateToProps = (state) => {
  return {
    messages: getMessages(state),
  };
};

export default connect(mapStateToProps, { addMessage })(ListMessages);
