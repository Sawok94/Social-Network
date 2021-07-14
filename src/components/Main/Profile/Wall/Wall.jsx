import React from 'react';
import Post from '../../../../utils/OverallComponents/Post/Post';
import style from '../Wall/Wall.module.css';
import border from '../../Main.module.css';
import AddPostForm from './AddPostForm/AddPostForm';
import NoPost from '../../../../assets/noPost.png';

const Wall = (props) => {
  const clickDate = new Date();
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const deletePost = (userId) => {
    props.deletePost(userId);
  };

  const addNewPost = (post) => {
    props.addPost(
      post.textAreaForm.trim(),
      clickDate.toLocaleString('ru', options)
    );
  };
  return (
    <article className={style.wall}>
      <AddPostForm onSubmit={addNewPost} photo={props.profileMyPhoto} />
      {props.posts.length && !props.urlId ? (
        props.posts.map((post) => (
          <Post
            key={post.id}
            textPost={post.textPost}
            datePost={post.datePost}
            id={post.id}
            login={props.login}
            deletePost={deletePost}
            photo={props.profilePhoto}
          />
        ))
      ) : (
        <section className={`${style.wall_noPost} ${border.wrapper}`}>
          <img src={NoPost} alt='NoPostImg' />
          <figcaption>На стене пока нет ни одной записи</figcaption>
        </section>
      )}
    </article>
  );
};

export default Wall;
