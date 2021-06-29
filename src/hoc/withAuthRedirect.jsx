import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getIsAuth } from '../selectors/auth-selectors';

export const withAuthRedirect = (Component) => {
  const AuthRedirect = (props) => {
    if (!props.isAuth) {
      return <Redirect to='/login' />;
    }

    return <Component {...props} />;
  };

  let RedirectContainer = connect(mapStateToProps)(AuthRedirect);

  return RedirectContainer;
};

let mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});
