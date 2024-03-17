import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ToastAndroid, Image, TextInput } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import Toast from 'react-native-root-toast';

const EditProfile = ({route, navigation}) => {
    const ToastMessage=()=>{
        ToastAndroid.show("Edited Sucessfully!", ToastAndroid.SHORT);
    }
    const showToast = () => {
        Toast.show('Edited Successfully!', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          backgroundColor: 'green',
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      };
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header_container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name='chevron-left' color='black' size={33}/>
            </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Edit Profile 
            </Text>
            <TouchableOpacity
                onPress={()=>{
                    showToast();
                    navigation.goBack();
                }}
            >
                <Feather name='check' color='black' size={33}/>
            </TouchableOpacity>           
        </View>
        <View style={styles.blurLine} />
        <View style={styles.imageProfile_Container}>
            <Image source={{ uri: 'https://s.net.vn/rvQp'}} style={styles.imageProfile}/>
            <Text style={{fontWeight:'600', color:'#3493D9', paddingTop: 10}}>Change profile picture</Text>
        </View>
        <View style={styles.blurLine} />
        <View style={{padding:10}}>
            <View style={styles.inputProfile}>
                <Text style={{fontSize: 16}}>
                    Name
                </Text>
                <TextInput 
                    placeholder='name'
                    defaultValue='Nguyễn Duy Đăng'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputProfile}>
                <Text style={{fontSize: 16}}>
                    Username
                </Text>
                <TextInput 
                    placeholder='Username'
                    defaultValue='_ngddangg'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputProfile}>
                <Text style={{fontSize: 16}}>
                    Website
                </Text>
                <TextInput 
                    placeholder='Website'
                    defaultValue=''
                    style={styles.input}
                />
            </View>
            <View style={styles.inputProfile}>
                <Text style={{fontSize: 16}}>
                    Bio
                </Text>
                <TextInput 
                    placeholder='Bio'
                    defaultValue='No Pain No Gain'
                    style={styles.input}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },

    header_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },

    blurLine: {
        width: '100%', // Độ rộng của đường kẻ mờ mờ, có thể điều chỉnh tùy ý
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.05)', // Màu của đường kẻ mờ mờ
        marginBottom: 10, // Khoảng cách với phần nội dung trên
    },

    imageProfile_Container: {
        padding: 20,
        alignItems: 'center'
    },

    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 100
    },

    inputProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },

    input: {
        width: '70%',
        height: 40,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.07)'
    }

})

export default EditProfile