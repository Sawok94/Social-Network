import React, { useEffect } from 'react';
import style from '../Friends/Friends.module.css';
import border from '../../Main.module.css'

const Friends = (props) => {
  useEffect(() => {

  })
  
  return (
    <div className={`${style.friends} ${border.wrapper}`}>
      друзья
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </div>
  );
};
 
export default Friends;
