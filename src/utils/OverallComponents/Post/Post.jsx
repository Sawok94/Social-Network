import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from '../Post/Post.module.css';
import border from '../../../components/Main/Main.module.css';

const Post = (props) => {
  return (
    <div className={`${style.post} ${border.wrapper}`}>
      <div className={style.post__avatar}>
        <Avatar style='avatar__middle' />
      </div>
      {props.textPost}
    </div>
  );
};

export default Post;