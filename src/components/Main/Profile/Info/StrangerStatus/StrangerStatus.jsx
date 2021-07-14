import React from 'react';

const StrangerStatus = (props) => {
  return <h7>{props.status || <i>Статус не указан</i>}</h7>;
};

export default StrangerStatus;
