import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import React from 'react'

const postFooterIcons = [
  {
    name: 'Like',
    imgURL: 'https://img.icons8.com/fluency-systems-regular/48/like--v1.png',
    likeImgURL: 'https://img.icons8.com/fluency-systems-filled/48/like.png'
  },
  {
    name: 'Comment',
    imgURL: 'https://img.icons8.com/sf-regular/48/speech-bubble.png'
  },
  {
    name: 'Share',
    imgURL: 'https://img.icons8.com/ios/50/sent--v1.png'
  },
  {
    name: 'Save',
    imgURL: 'https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png'
  },
]

const Post = ({post}) => {
  return (
    <View style={{ marginBottom: 30}}>
      <Divider width={1} orientation='vertical'/>
      <PostHeader post={post}/>
      <PostImage post={post}/>
      <View style={{ marginHorizontal: 15, marginTop: 10}}>
        <PostFooter/>
        <Likes post={post}/>
        <Caption post={post}/>
        <CommentSection post={post}/>
        <Comments post={post}/>
      </View>
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{ uri: post.profile_picture }} style={styles.story}/>
      <Text style={{ color: 'black', marginLeft: 5, fontWeight: '500'}}>
        {post.user}
      </Text>
    </View>
    <TouchableOpacity>
      <Text style={{fontWeight: '800', marginRight: 5}}>...</Text>
    </TouchableOpacity>
  </View>
)

const PostImage = ({post}) => (
  <View 
    style={{
      width: '100%',
      height: 450,
    }}
  >
    <Image 
      source={{ uri: post.imgURL}}
      style={{ height: '100%', resizeMode: 'cover'}}
    />
  </View>
)

const PostFooter = ({post}) => (
  <View style={{ flexDirection: 'row'}}>
    <View style={styles.leftFooterIcon}>
      <Icon imgStyle={styles.footIcon} imgURL={postFooterIcons[0].imgURL}/>
      <Icon imgStyle={styles.footIcon} imgURL={postFooterIcons[1].imgURL}/>
      <Icon imgStyle={styles.footIcon} imgURL={postFooterIcons[2].imgURL}/>
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end'}}>
      <Icon imgStyle={styles.footIcon} imgURL={postFooterIcons[3].imgURL}/>
    </View>
  </View>
)

const Icon = ({ imgStyle, imgURL}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgURL }}/>
  </TouchableOpacity>
)

const Likes = ({post}) => (
  <View style={{ flexDirection: 'row', marginTop: 4}}>
    <Text style={{fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text>
  </View>
)

const Caption = ({ post }) => (
  <View style={{marginTop: 5}}>
    <Text>
      <Text style={{fontWeight: '600'}}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>

)

const CommentSection = ({post}) =>( 
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: 'gray'}}>
        View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments': 'comment'}
      </Text>
    )}
  </View>
)

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View>
        <Text>
          <Text style={{ fontWeight: '600'}}>{comment.user}</Text>
          {' '}{comment.comment}
        </Text>
      </View>
    ))}
  </>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 1.6,
    borderColor: '#FF8501',
  },
  footIcon: {
    width: 30,
    height: 30
  },
  leftFooterIcon: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between'
  }
})

export default Post