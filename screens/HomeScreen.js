import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <Header/>
      <Stories/>
      <ScrollView style={{ height: '74%' }}>
        {POSTS.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      <BottomTab icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}

export default HomeScreen