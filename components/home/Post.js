import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Button,
} from "react-native";
import { Divider } from "react-native-elements";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { handleCreateLike } from "../../untils/until/posts";

const postFooterIcons = [
  {
    name: "Like",
    imgURL: "https://img.icons8.com/fluency-systems-regular/48/like--v1.png",
    likeImgURL: "https://img.icons8.com/fluency-systems-filled/48/like.png",
  },
  {
    name: "Comment",
    imgURL: "https://img.icons8.com/sf-regular/48/speech-bubble.png",
  },
  {
    name: "Share",
    imgURL: "https://img.icons8.com/ios/50/sent--v1.png",
  },
  {
    name: "Save",
    imgURL:
      "https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png",
  },
];

const Post = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} isLike={isLike} setIsLike={setIsLike} />
        <Likes post={post} />
        <Caption post={post} />
        {/* <CommentSection post={post}/> */}
        {/* <Comments post={post}/> */}
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.image_url }} style={styles.story} />
      <Text style={{ color: "black", marginLeft: 5, fontWeight: "500" }}>
        {post.user.name}
      </Text>
    </View>
    <TouchableOpacity>
      <Text style={{ fontWeight: "800", marginRight: 5 }}>...</Text>
    </TouchableOpacity>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.image_url }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post, isLike, setIsLike }) => {
  console.log("isLike", isLike);
  console.log(post.likedAmount);
  const [modalVisible, setModalVisible] = useState(false);

  const [comments, setComments] = useState([]); // Danh sách bình luận
  // Hàm xử lý khi nút bình luận được nhấn
  const handleComment = () => {
    // Trong ví dụ này, mở modal và hiển thị danh sách bình luận ảo
    setComments([
      {
        id: 1,
        content: "Bình luận 1",
        name: "h_khoa",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
      },
      {
        id: 2,
        content: "Bình luận 2",
        name: "h_khoa",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
      },
      {
        id: 3,
        content: "Bình luận 3",
        name: "h_khoa",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
      },
      {
        id: 4,
        content: "Bình luận 4",
        name: "h_khoa",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
      },
    ]);
    setModalVisible(true);
  };
  const handleLike = () => {
    setIsLike(!isLike);
    if (!isLike) {
      handleCreateLike(post.id);
    }
    console.log(post);
  };
  // Hàm đóng modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.leftFooterIcon}>
        {isLike ? (
          <TouchableOpacity onPress={handleLike}>
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLike}>
            <Feather name="heart" size={24} color="black" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleComment}>
          <FontAwesome5 name="comment" size={24} color="black" />
        </TouchableOpacity>
        <Feather name="send" size={24} color="black" />
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Icon imgStyle={styles.footIcon} imgURL={postFooterIcons[3].imgURL} />
      </View>
      <CommentSection
        comments={comments}
        modalVisible={modalVisible}
        handleCloseModal={handleCloseModal}
      />
    </View>
  );
};

const Icon = ({ imgStyle, imgURL, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={imgStyle} source={{ uri: imgURL }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ fontWeight: "600" }}>{post.likedAmount} likes</Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text>
      <Text style={{ fontWeight: "600" }}>{post.user.name}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ comments, modalVisible, handleCloseModal }) => {
  // Render mỗi item trong danh sách bình luận

  const renderCommentItem = ({ item }) => {
    console.log(item);
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#CCCCCC",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: item?.avatar }}
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontWeight: "bold" }}>{item?.name}</Text>
            <Text>{item?.content}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Feather name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleCloseModal}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View style={{ backgroundColor: "white", padding: 20, width: "100%" }}>
          <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Button title="Đóng" onPress={handleCloseModal} />
        </View>
      </View>
    </Modal>
  );
};

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View>
        <Text>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 1.6,
    borderColor: "#FF8501",
  },
  footIcon: {
    width: 30,
    height: 30,
  },
  leftFooterIcon: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

const ModalComment = () => {};

export default Post;
