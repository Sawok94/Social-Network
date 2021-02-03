import React from 'react';
import Post from '../../../../utils/OverallComponents/Post/Post';
import style from '../Wall/Wall.module.css';
import AddPostForm from './AddPostForm/AddPostForm';

const Wall = (props) => {
  const deletePost = (userId) => {
    props.deletePost(userId);
  };

  const addNewPost = (post) => {
    props.addPost(post.textAreaForm);
  };

  return (
    <div className={style.wall}>
      <AddPostForm onSubmit={addNewPost} photo={props.profilePhoto} />
      {props.posts.map((post) => (
        <Post
          key={post.id}
          textPost={post.textPost}
          id={post.id}
          deletePost={deletePost}
          photo={props.profilePhoto}
        />
      ))}
    </div>
  );
};

export default Wall;
