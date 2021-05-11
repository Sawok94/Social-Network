import * as axios from 'axios';

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '67324632-39bc-4f61-a7ca-ee951a430759',
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
};

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`);
  },
  deAuthMe() {
    return instance.delete(`/auth/login`);
  },
};
