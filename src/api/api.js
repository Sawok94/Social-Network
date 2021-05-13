import * as axios from 'axios';

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e9c26744-99a1-4391-9d00-e03a7fab4f78',
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
};

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`);
  },
  deAuthMe() {
    return instance.delete(`/auth/login`);
  },
};
