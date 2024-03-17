import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ButtonProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.push("EditProfile")}
        style={styles.iconFeature}>
        <Text style={{fontWeight: '600',}}>
            Edit Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconFeature}>
        <Text style={{fontWeight: '600',}}>
            Share Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconFollow}>
        <Image source={require('../../assets/follow.png')} style={{width: 25, height: 25}}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 10
    },

    iconFeature: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 8,
        width: 150,
        borderRadius: 7
    },

    iconFollow: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 3,
        width: 40,
        borderRadius: 7
    }
})

export default ButtonProfile