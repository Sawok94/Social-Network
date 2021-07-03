import * as axios from 'axios';

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '9f0354ba-1c2f-4391-95a2-74ed0528b404',
  },
});

export const userAPI = {
  getUsers(currentPage, sizePage, searchName, searchFriends) {
    return instance.get(
      `users?page=${currentPage}&count=${sizePage}&term=${searchName}&friend=${searchFriends}`
    );
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, { status });
  },
  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append('image', photoFile);

    return instance.put(`/profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfileInfo(profileInfo) {
    return instance.put(`/profile`, profileInfo);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`);
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`/auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`/auth/login`);
  },
};

export const captchaAPI = {
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`);
  },
};
