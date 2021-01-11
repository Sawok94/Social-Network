import * as axios from 'axios';

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '67324632-39bc-4f61-a7ca-ee951a430759',
  },
});

export const userAPI = {
  getUsers(currentPage = 1, sizePage = 10) {
    return instance.get(`users?page=${currentPage}&count=${sizePage}`);
  },
  getTotalCount() {
    return instance.get(`users`);
  },
};
