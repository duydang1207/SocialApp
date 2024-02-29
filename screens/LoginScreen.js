import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import TextInputField from "../components/TextInputField";
import ButtonField from "../components/ButtonField";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../components/BackBotton";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(false);
  const handleLogin = async () => {
    try {
      // Lấy dữ liệu người dùng từ AsyncStorage
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        // Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
        const user = JSON.parse(userData);
        // Kiểm tra xem tài khoản có tồn tại không
        if (user.email === email && user.password === password) {
          // Đăng nhập thành công, điều hướng đến màn hình HomePage
          navigation.navigate("HomePage");
        } else {
          // Thông báo lỗi khi thông tin đăng nhập không đúng
          Alert.alert('Invalid phone number or password!');
        }
      } else {
        // Thông báo lỗi khi không tìm thấy tài khoản trong AsyncStorage
        Alert.alert('No user found with provided credentials!');
      }
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error during login:', error);
    }
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
            placeholder="Enter your email"
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
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              Forgot Password
            </Text>
          </Pressable>
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
            disabled={disabled}
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
