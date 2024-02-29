import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <AntDesign name="left" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    left: 20,
  },
});

export default BackButton;
