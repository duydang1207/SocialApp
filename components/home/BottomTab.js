import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export const bottomTabIcons = [
    {
        name: 'HomePage',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/home--v1.png',
        active: 'https://img.icons8.com/fluency-systems-filled/48/home.png'
    },
    {
        name: 'Search',
        inactive: 'https://img.icons8.com/ios/50/search--v1.png',
        active: 'https://img.icons8.com/ios-filled/50/search--v1.png'
    },
    {
        name: 'Add',
        inactive: 'https://img.icons8.com/ios/50/plus-2-math.png',
        active: 'https://img.icons8.com/ios-filled/50/plus-2-math.png'
    },
    {
        name: 'Favorites',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/like--v1.png',
        active: 'https://img.icons8.com/fluency-systems-filled/48/like.png'
    },
    {
        name: 'Profile',
        inactive: 'https://img.icons8.com/material-outlined/96/user-male-circle.png',
        active: 'https://img.icons8.com/material/96/user-male-circle--v1.png'
    },
]

const BottomTab = ({icons}) => {
    //Navigation
    const navigation = useNavigation();

    const [activeTab, setActive] = useState('HomePage');

    const handleSetActive = (name) => {
        setActive(name);
        navigation.navigate(name);
    };

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => handleSetActive(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.container}>
            {
                icons.map((icon, index) =>(
                    <Icon key={index} icon={icon}/>
                ))
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#fff',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },

    icon: {
        width: 30,
        height: 30
    }
})

export default BottomTab