import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import {HIGHLIGHT} from '../../data/storiesHighLight'
import Entypo from 'react-native-vector-icons/Entypo'

const StoryHighLight = () => {
  return (
    <View style={{ marginTop: 15, marginHorizontal: 10, marginBottom: 20}}>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {HIGHLIGHT.map((story, index) => (
          <View key={index} style={{ alignItems: 'center'}}>
            <Image source={{uri: story.image}}
            style={styles.story}/>
            <Text style={{ color:'black', fontSize: 11, marginTop: 5}}>
              {story.title}
            </Text>
          </View>
        ))}
        <View style={{ alignItems: 'center'}}>
            <View style={styles.storynew}>
                <Entypo name='plus' style={{fontSize: 40, color: 'black'}}/>
            </View>
            <Text style={{ color:'black', fontSize: 11, marginTop: 5}}>
              New
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginLeft: 6,
      marginRight: 6,
      borderWidth: 3,
      borderColor: '#C7C7CC',
    },

    storynew: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: 6,
        marginRight: 6,
        borderWidth: 3,
        borderColor: '#C7C7CC',
      },
})

export default StoryHighLight