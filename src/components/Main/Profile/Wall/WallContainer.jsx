import React from 'react';
import StoreContext from '../../../../hoc/StoreContext';
import { addCharAC, addPostAC } from '../../../../redux/posts-reducer';
import Wall from './Wall';

const WallContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = (props) => {
          store.dispatch(addPostAC(props));
        };
        let addChar = (props) => {
          store.dispatch(addCharAC(props));
        };
        return (
          <Wall
            posts={store.getState().posts}
            textPost={store.getState().posts.textPost}
            addPost={addPost}
            addChar={addChar}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default WallContainer;
