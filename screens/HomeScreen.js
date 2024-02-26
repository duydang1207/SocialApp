import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import { color } from 'react-native-tailwindcss';

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <Header/>
    </SafeAreaView>
  )
}

export default HomeScreen