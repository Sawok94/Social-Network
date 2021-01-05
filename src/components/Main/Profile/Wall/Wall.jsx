import React from 'react';
import Post from '../../../../utils/OverallComponents/Post/Post';
import style from '../Wall/Wall.module.css';
import AddPost from './AddPost/AddPost';

const Wall = (props) => {
  let showPosts = props.posts.map((post) => (
    <Post key={post.id} textPost={post.textPost} />
  ));

  return (
    <div className={style.wall}>
      <AddPost
        addPost={props.addPost}
        textPost={props.textPost}
        addChar={props.addChar}
      />
      {showPosts}
    </div>
  );
};

export default Wall;
