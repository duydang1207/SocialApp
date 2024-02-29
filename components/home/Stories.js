import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users';

const Stories = () => {
  return (
    <View style={{ marginBottom: 7}}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center'}}>
            <Image source={{uri: story.image}}
            style={styles.story}/>
            <Text style={{ color:'black', fontSize: 13, marginTop: 5}}>
              {story.user.length > 11 
              ? story.user.slice(0,10).toLowerCase() + '...'
              : story.user}
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