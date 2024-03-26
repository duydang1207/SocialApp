import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const info = {
    name: "h_khoa",
    id: 1,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
  };
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Pressable onPress={goBack}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
        <View style={styles.info}>
          <Image
            style={styles.logo}
            source={{
              uri: info.avatar,
            }}
          />
          <View>
            <Text style={styles.username}>{info.name}</Text>
            <Text style={styles.isOnline}>Đang hoạt động</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  username: {
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
  },
});

export default Header;
