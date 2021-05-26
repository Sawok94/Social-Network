import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from '../Post/Post.module.css';
import border from '../../../components/Main/Main.module.css';

const Post = (props) => {
  return (
    <div className={`${style.post} ${border.wrapper}`}>
      <div className={style.post__avatar}>
        <Avatar photo={props.photo} style='avatar__middle' />
        <div
          onClick={() => {
            props.deletePost(props.id);
          }}
          className={style.post__delete}
        >
          &#215;
        </div>
      </div>
      <div className={style.post__text}>{props.textPost}</div> 
    </div>
  );
};

export default Post;
