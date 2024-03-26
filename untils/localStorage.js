import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            return data;
        }
        return null;
    } catch (error) {
        console.error('Error getting data from AsyncStorage:', error);
        return null;
    }
};

export const setData = async (key, data) => {
    try {
        if (typeof data === 'object') {
            await AsyncStorage.setItem(key, data);
        } else {
            await AsyncStorage.setItem(key, data);
        }
        console.log('Data saved successfully to AsyncStorage');
    } catch (error) {
        console.log('Error saving data to AsyncStorage:');
    }
};

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Data removed successfully from AsyncStorage');
    } catch (error) {
        console.error('Error removing data from AsyncStorage:', error);
    }
};
