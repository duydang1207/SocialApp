import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Infomation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoColum}>
        <Image
            style={{
                width: 80, 
                height: 80,
                borderRadius: 50,
                marginLeft: 5
            }}
            source={{uri: 'https://s.net.vn/rvQp'}}
        />
        <Text style={styles.username}>
            Nguyễn Duy Đăng
        </Text>
        <Text>
            No Pain No Gain
        </Text>
      </View>
      <View style={styles.infoActive}>
        <View style={{alignItems: 'center'}}>
            <Text style={{
                fontSize: 18,
                fontWeight: '600',
            }}>1</Text>
            <Text>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={{
                fontSize: 18,
                fontWeight: '600',
            }}>17</Text>
            <Text>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={{
                fontSize: 18,
                fontWeight: '600',
            }}>204</Text>
            <Text>Following</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',  
        marginTop: 25,
        marginRight: 25,
    },

    infoColum: {
        flexDirection: 'column',
    },

    username: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10
    },

    infoActive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 30
    }
})

export default Infomation