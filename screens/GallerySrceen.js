import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Keyboard } from "react-native";

const GallerySrceen = ({ navigation }) => {
  const [image, setImage] = useState();

  const uploadImage = async (mode) => {
    try {
      let result = {};
      if (mode === "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        //save image
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
      // setModalVisible(false);
    }
  };

  const saveImage = async (image) => {
    try {
      //update displayed image
      setImage(image);
      // setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };
  // Một hàm để tắt bàn phím
  const handleBlur = () => {
    Keyboard.dismiss(); // Ẩn bàn phím khi TextInput mất focus
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonHeader}
        >
          <Feather name="x" color="black" size={33} />
        </TouchableOpacity>
        <Text style={{ color: "#4169e1", fontSize: 18, fontWeight: "600" }}>
          New Post
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonHeader}
        >
          <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <TextInput
            multiline
            placeholder="What's on your mind?"
            style={{ height: 100, padding: 10, backgroundColor: "#FFFFFF" }}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.imagePostContainer}>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePicked} />
          ) : (
            <Image
              source={{ uri: "https://s.net.vn/t5l4" }}
              style={styles.imagePicked}
            />
          )}
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={styles.iconFeature}
          onPress={() => uploadImage()}
        >
          <Text style={{ fontWeight: "500" }}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconFeature, { backgroundColor: "#7fffd4" }]}
          onPress={() => uploadImage("gallery")}
        >
          <Text style={{ fontWeight: "500" }}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 10
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },

  imagePostContainer: {
    backgroundColor: "black",
    width: "100%",
    height: 500,
    marginBottom: 20,
  },

  imagePicked: {
    width: 380,
    height: 400,
  },

  iconFeature: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 8,
    width: 150,
    borderRadius: 7,
  },

  buttonHeader: {
    // margin: 10
  },
});

export default GallerySrceen;
