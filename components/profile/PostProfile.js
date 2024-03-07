import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feather from "react-native-vector-icons/Feather"

const PostProfile = () => {
  const Tab = createMaterialTopTabNavigator();

  let squares = [];
  let numberOfSquare = 5;

  for (let index = 0; index < numberOfSquare; index++){
    squares.push(
        <View key={index}>
            <View style={{
                marginHorizontal: 0.5,
                marginVertical: 1,
                backgroundColor: 'black',
            }}>
            <Image source={{uri: "https://s.net.vn/DF2N"}} style={{width: 129, height: 130}}/>
            </View>
        </View>
    )
  }

  const Posts = () => {
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                width: '100%',
                height: '100%'
        }}>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                flexWrap: 'wrap',
                flexDirection: 'row',
                paddingVertical: 3,
                justifyContent: 'flex-start'
            }}>
                {squares}
            </View>
        </ScrollView>
    );
  };

  const Videos = () => {
    return(
        <View>
            <Text>
                Videos
            </Text>
        </View>
    )
  }

  const Tags = () => {
    return(
        <View>
            <Text>
                Tags
            </Text>
        </View>
    )
  }

  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
                backgroundColor:'black',
                height: 1.5
            },
            tabBarIcon: ({focused, colour}) => {
                let iconName;
                if(route.name === "Posts"){
                    iconName = focused ? "grid" : "grid";
                    colour = focused ? "black" : "gray";
                } else if(route.name === "Videos"){
                    iconName = focused ? "film" : "film";
                    colour = focused ? "black" : "gray";
                } else if(route.name === "Tags"){
                    iconName = focused ? "tag" : "tag";
                    colour = focused ? "black" : "gray";
                }
                return <Feather name={iconName} color={colour} size={22}/>
            }
        })}
    >
        <Tab.Screen name='Posts' component={Posts}/>
        <Tab.Screen name='Videos' component={Videos}/>
        <Tab.Screen name='Tags' component={Tags}/>
    </Tab.Navigator>
  )
}

export default PostProfile