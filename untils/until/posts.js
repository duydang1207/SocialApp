// auth.js
import axios from 'axios';
import { getCacheAccessToken, setCacheAccessToken } from '..';
import { apiUrlBase,storageKeys } from '../contants';
import { getData } from '../localStorage';

const { USER_ACCESS_TOKEN } = storageKeys;

export const getPosts = async (kind) => {
    const token = await getData(USER_ACCESS_TOKEN);
    try {
      const res = await axios.get(`${apiUrlBase}/api/posts/list`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params: {
          kind
        } ,
      });
      // Xử lý dữ liệu trả về ở đây nếu cần
      return res.data;
    } catch (error) {
      console.error(error);
      // Hiển thị thông báo lỗi nếu có lỗi xảy ra
      Alert.alert("Error", "Failed to fetch posts");
      return null;
    }
};

export const handleCreateLike = async (postId) => {
    console.log(postId);
    const token = await getData(USER_ACCESS_TOKEN);
    console.log(token);
    console.log('res',`${apiUrlBase}/api/likes/create`);

    try {
        const res = await axios.post(`${apiUrlBase}/api/likes/create`,{
          postId: postId,
        }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        });
        // Xử lý dữ liệu trả về ở đây nếu cần
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};