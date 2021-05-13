import React from 'react';

const StrangerStatus = (props) => {
  return <div>{props.status || <i>Статус не указан</i>}</div>;
};

export default StrangerStatus;
