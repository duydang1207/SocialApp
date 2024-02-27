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

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 120 }}>
        <Image source={require("../assets/images/logo.png")} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 70 }}>
          <TextInputField
            placeholder="Enter your phone"
            value={email}
            setValue={setEmail}
          />
        </View>
        <View>
          <TextInputField
            secureTextEntry={true}
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
          />
        </View>
        <View
          style={{
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <ButtonField
            onPress={handleLogin}
            styles={{
              width: "100%",
              height: 44,
              backgroundColor: "#3797EF",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
            label="Login"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account?{" "}
            <Text style={{ color: "#3797EF" }}> Sign Up</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
