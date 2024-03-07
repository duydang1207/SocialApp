import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.info}>
            <Image 
                style={styles.iconLock}
                source={require('../../assets/lock.png')}/>
            <Text style={styles.username}>
                _ngddangg
            </Text>
            <TouchableOpacity>
                <Image source={require('../../assets/chevron-down.png')}
                    style={{
                        width: 20,
                        height: 10,
                        marginTop: 17
                    }}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.iconcontainer}>
            <TouchableOpacity>
                <Image 
                    style={styles.icon} 
                    source={{uri: 'https://img.icons8.com/ios/50/plus-2-math.png'}} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    style={styles.icon} 
                    source={require('../../assets/more.png')} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
    },

    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    username: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },

    iconLock: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: 15
    },
    iconcontainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginLeft: 15,
        marginRight: 10,
    }
})

export default Header