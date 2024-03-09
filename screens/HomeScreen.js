import { View, Text, SafeAreaView, ScrollView } from 'react-native'
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
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
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

export default HomeScreen