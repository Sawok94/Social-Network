import React, { useEffect } from 'react';
import style from '../Friends/Friends.module.css';
import border from '../../Main.module.css';
import Avatar from '../../../../../utils/OverallComponents/Avatar/Avatar';

const Friends = (props) => {
  return (
    <div className={`${style.friends} ${border.wrapper}`}>
      <span>Друзья</span>
      {props.profiles.map((profile) => {
        
      })}
      <Avatar
        // photo={props.photos.small}
        style='avatar__middle'
      />
      <div className={style.friendsProfile__infoProfile_name}>
        {/* <NavLink to={'/profile/' + props.id} className={style.link}> */}
        {/* {props.name} */}
        {/* </NavLink> */}
      </div>

      {console.log(props)}
    </div>
  );
};

export default Friends;
