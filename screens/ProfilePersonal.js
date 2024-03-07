import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';
import Header from '../components/profile/Header'
import Infomation from '../components/profile/Infomation';
import ButtonProfile from '../components/profile/ButtonProfile';
import StoryHighLight from '../components/profile/StoryHighLight';
import PostProfile from '../components/profile/PostProfile';


const ProfilePersonal = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <Infomation/>
        <ButtonProfile/>
        <StoryHighLight/>
        <PostProfile/>
        <BottomTab icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1
    }
})

export default ProfilePersonal