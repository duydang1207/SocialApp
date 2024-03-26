// auth.js
import axios from 'axios';
import { setCacheAccessToken } from '..';
import { apiUrlBase } from '../contants';

export const handleLogin = async (email, password, navigation) => {
  const user = {
    email: email,
    password: password,
  };

  try {
    const res = await axios.post(`${apiUrlBase}/api/auth/login`, user);
    setCacheAccessToken(res.data.payload.token);
    navigation.replace("HomePage");
  } catch (error) {
    console.error(error);
    Alert.alert("Login Error", "Invalid Email");
  }
};