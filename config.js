import { Platform } from 'react-native';

let apiUrl;
if (Platform.OS === 'ios') {
  apiUrl = 'https://social-network-api-kcxo.onrender.com';
} else if (Platform.OS === 'android') {
  apiUrl = 'https://social-network-api-kcxo.onrender.com';
}

export default {
  apiUrl,
};