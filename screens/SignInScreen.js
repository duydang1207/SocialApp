import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import TextInputField from "../components/TextInputField";
import ButtonField from "../components/ButtonField";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../components/BackBotton";

export default function SignInScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(false);
  const handleLogin = () => {
    const user = {
      phone: phone,
      password: password,
    };
    navigation.navigate("HomePage");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 120 }}>
        <Image source={require("../assets/images/logo.png")} />
      </View>

      <KeyboardAvoidingView>
        <View style={styles.avatar}>
          <Image
            style={styles.img}
            source={require("../assets/images/avatar.jpeg")}
          />
          <Text style={{ color: "#262626", fontWeight: 500, marginTop: 5 }}>
            khoa_ne
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <ButtonField
            onPress={handleLogin}
            styles={{
              width: 307,
              height: 44,
              backgroundColor: "#3797EF",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled={disabled}
            label="Login"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.switch}
        >
          <Text style={{ color: "#3797EF", fontWeight: 600, fontSize: 14 }}>
            Switch accounts
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: "50%",
  },
  switch: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
