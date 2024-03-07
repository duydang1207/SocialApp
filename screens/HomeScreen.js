import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <ScrollView style={{ height: '70%' }}>
        {POSTS.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
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

export default HomeScreen