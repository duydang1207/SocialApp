import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "../components/chat/Header";
import { Feather } from "@expo/vector-icons";

const ChatDetailScreen = () => {
  const [newMessage, setNewMessage] = useState("");

  // Dữ liệu tin nhắn mẫu
  const messages = [
    { id: "1", sender: "A", content: "Hello B!" },
    { id: "2", sender: "B", content: "Hi A! How are you?" },
    { id: "3", sender: "A", content: "I am doing well, thank you!" },
    // Thêm tin nhắn khác nếu cần
  ];

  // Render mỗi item trong danh sách tin nhắn
  const renderMessageItem = ({ item }) => {
    return (
      <View
        style={
          item.sender === "A"
            ? styles.messageContainerA
            : styles.messageContainerB
        }
      >
        <Text style={styles.messageText}>{item.content}</Text>
      </View>
    );
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageItem = {
        id: String(Math.random()),
        sender: "A",
        content: newMessage.trim(),
      };
      //   setMessages([...messages, newMessageItem]);
      setNewMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
    >
      <Header />
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        inverted // Đảo ngược thứ tự của danh sách tin nhắn để tin nhắn mới nhất hiển thị ở trên cùng
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhắn tin mới..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Feather name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  messagesList: {
    flexGrow: 1,
    justifyContent: "flex-end", // Đảm bảo tin nhắn mới nhất hiển thị ở dưới cùng
  },
  messageContainerA: {
    alignSelf: "flex-start", // Hiển thị tin nhắn của A ở bên trái
    backgroundColor: "#E5E5EA",
    borderRadius: 10,
    maxWidth: "70%", // Giới hạn độ rộng của tin nhắn để tránh tin nhắn quá dài
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  messageContainerB: {
    alignSelf: "flex-end", // Hiển thị tin nhắn của B ở bên phải
    backgroundColor: "#007AFF",
    borderRadius: 10,
    maxWidth: "70%",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 14,
    padding: 8,
    width: 54,
    alignItems: "centers",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ChatDetailScreen;
