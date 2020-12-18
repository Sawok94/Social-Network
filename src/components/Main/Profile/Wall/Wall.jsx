import React, { createRef } from 'react';
import Post from '../../../../utils/OverallComponents/Post/Post';
import style from '../Wall/Wall.module.css';
import AddPost from './AddPost/AddPost';
import posts from '../../../../redux/posts-reducer.js';

const Wall = (props) => {
  let showPosts = posts.posts.map((post) => <Post textPost={post.textPost} />);

  return (
    <div className={style.wall}>
      <AddPost />
      {showPosts}
    </div>
  );
};

export default Wall;
