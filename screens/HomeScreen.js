import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState} from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post';
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';
import { getPosts } from '../untils/until/posts';
const HomeScreen = () => {
  const [posts,setPosts]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts(1);
      console.log('posts',posts)
      if (posts) {
        setPosts(posts.payload)
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories posts={posts}/>
      <ScrollView style={{ height: '74%' }}>
        {posts.map((post, index) => (
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