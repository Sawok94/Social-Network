import axios from 'axios';

let api = axios.create({
  withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "67324632-39bc-4f61-a7ca-ee951a430759"
    }
})

