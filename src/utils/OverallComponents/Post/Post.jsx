import React from 'react';
import Avatar from '../Avatar/Avatar';
import style from '../Post/Post.module.css';
import border from '../../../components/Main/Main.module.css';

const Post = (props) => {
  return (
    <div className={`${style.post} ${border.wrapper}`}>
      <span
        onClick={() => {
          props.deletePost(props.id);
        }}
        className={style.post__delete}
      >
        &#215;
      </span>
      <section className={style.post__post}>
        <div className={style.post__post_data}>
          <Avatar photo={props.photo} style={`avatar__middle`} />
          <div className={style.post__post_info}>
            <b className={style.post__post_login}>{props.login}</b>
            <i className={style.post__post_date}>{props.datePost}</i>
          </div>
        </div>
        <div className={style.post__text}>{props.textPost}</div>
      </section>
    </div>
  );
};

export default Post;
