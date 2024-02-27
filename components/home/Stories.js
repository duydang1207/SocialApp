import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { USER } from '../../data/Users'

const Stories = () => {
  return (
    <View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {USER.map((story, index) => (
          <View key={index} style={{ alignItems: 'center'}}>
            <Image source={{uri: story.image}}
            style={styles.story}/>
            <Text style={{ color:'black', fontSize: 13, marginTop: 5}}>
              {story.user.length > 11 
              ? story.user.slice(0,10).toLowerCase() + '...'
              : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 83,
    height: 83,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 3,
    borderColor: '#FF8501',
  },
})

export default Stories