import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users';

const Stories = ({posts}) => {
  console.log('posts',posts);
  return (
    <View style={{ marginBottom: 7}}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center'}}>
          <Image source={{uri: USERS[0].image}}
          style={styles.story}/>
          <Text style={{ color:'black', fontSize: 13, marginTop: 5}}>
            {USERS[0].user.length > 11 
            ? USERS[0].user.slice(0,10).toLowerCase() + '...'
            : USERS[0].user}
          </Text>
        </View>
        {posts?.map((story, index) => (
          <View key={index} style={{ alignItems: 'center'}}>
            <Image source={{ uri: story.image_url }}
            style={styles.story}/>
            <Text style={{ color:'black', fontSize: 13, marginTop: 5}}>
              {story?.user?.name?.length > 11 
              ? story?.user?.name?.slice(0,10).toLowerCase() + '...'
              : story?.user?.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 3,
    borderColor: '#FF8501',
  },
})

export default Stories