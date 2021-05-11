import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

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
  isAuth: state.auth.isAuth,
});
