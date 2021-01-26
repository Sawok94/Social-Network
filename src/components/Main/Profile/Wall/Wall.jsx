import React from 'react';
import Post from '../../../../utils/OverallComponents/Post/Post';
import style from '../Wall/Wall.module.css';
import AddPostForm from './AddPostForm/AddPostForm';

const Wall = (props) => {
  let showPosts = props.posts.map((post) => (
    <Post key={post.id} textPost={post.textPost} />
  ));

  const addNewPost = (post) => {
    props.addPost(post.textAreaForm);
  };
  
  return (
    <div className={style.wall}>
      <AddPostForm onSubmit={addNewPost} />
      {showPosts}
    </div>
  );
};

export default Wall;
