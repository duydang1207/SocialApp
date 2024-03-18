import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState} from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';
import axios from "axios";
import apiUrl from '../config'
const HomeScreen = () => {
  const [posts,setPosts]=useState([]);
  console.log('apiUrl',apiUrl.apiUrl);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiUrl.apiUrl}/api/posts/list`);
        setPosts(res?.data?.payload);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(posts);
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
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