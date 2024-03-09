import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect} from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab';
import axios from "axios";

const HomeScreen = () => {
  const [ posts, setPosts ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.log("error message", error);
      }
    };

    fetchData();
  }, []);
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