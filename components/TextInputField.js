import { View, Text, TextInput } from "react-native";
import React from "react";

const TextInputField = ({
  placeholder,
  value,
  setValue,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        height: 50,
        backgroundColor: "#FAFAFA",
        paddingVertical: 5,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginTop: 10,
        borderColor: "#E1E1E1",
        borderWidth: 1,
      }}
    >
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        style={{
          color: "black",
          marginVertical: 10,
          width: 300,
          fontSize: 16,
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputField;
