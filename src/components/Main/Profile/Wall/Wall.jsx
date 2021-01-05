import React from 'react';
import Post from '../../../../utils/OverallComponents/Post/Post';
import style from '../Wall/Wall.module.css';
import AddPostReduxForm from './AddPost/AddPost';

const Wall = (props) => {
  let showPosts = props.posts.map((post) => (
    <Post key={post.id} textPost={post.textPost} />
  ));

  onSubmit = () => {
    console.log('1');
  }

  return (
    <div className={style.wall}>
      <AddPostReduxForm onSubmit={onSubmit}
        addPost={props.addPost}
        textPost={props.textPost}
        addChar={props.addChar}
      />
      {showPosts}
    </div>
  );
};

export default Wall;
