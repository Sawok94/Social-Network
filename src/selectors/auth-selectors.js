export const getAuthLogin = (state) => {
  return state.auth.login;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};

export const getAuthId = (state) => {
  return state.auth.id;
};

export const getCaptchaImg = (state) => {
  return state.auth.captcha;
};
