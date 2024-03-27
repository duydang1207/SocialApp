import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const MessageScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const [searchText, setSearchText] = useState(""); // State để lưu trữ giá trị nhập của người dùng
  const info = {
    name: "h_khoa",
    id: 1,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
  };
  const messages = [
    {
      id: "1",
      sender: "Khoa",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",

      message: "Chào em",
      time: "10:00 AM",
    },
    {
      id: "2",
      sender: "Long",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",

      message: "Bạn khoẻ không",
      time: "11:30 AM",
    },
    {
      id: "3",
      sender: "Đăng",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",

      message: "Hôm nay trời có mưa trên khắp cả nước",
      time: "12:45 PM",
    },
  ];
  // Hàm để kiểm tra độ dài của tin nhắn và hiển thị một phần của nó
  const truncateMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + "...";
    }
    return message;
  };

  // Render mỗi item trong danh sách tin nhắn
  const renderMessageItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate("ChatDetail")}>
        <View style={styles.messageContainer}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.messageContent}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text>{truncateMessage(item.message, 20)}</Text>
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Pressable onPress={goBack}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
        <Text style={styles.username}>{info.name}</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Text style={styles.title}>Tin nhắn</Text>

      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: { fontWeight: "bold", marginBottom: 10, marginTop: 10 },
  searchInput: {
    marginTop: 10,
    height: 36,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    marginLeft: 10,
    color: "#999999",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MessageScreen;
