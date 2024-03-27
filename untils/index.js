import { getData, removeItem, setData } from "./localStorage";
import { storageKeys } from "./contants";

const { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } = storageKeys;
export const getCacheAccessToken = () => getData(USER_ACCESS_TOKEN);
export const setCacheAccessToken = (accessToken) => setData(USER_ACCESS_TOKEN, accessToken);
