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
import BackButton from "../components/BackBotton";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <BackButton />
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
        <View>
          <TextInputField
            secureTextEntry={true}
            placeholder="Confirm password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <ButtonField
            onPress={handleRegister}
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
            label="Register"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Have an account? <Text style={{ color: "#3797EF" }}>Sign in</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
