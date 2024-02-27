import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post';

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <Header/>
      <Stories/>
      <Post/>
    </SafeAreaView>
  )
}

export default HomeScreen