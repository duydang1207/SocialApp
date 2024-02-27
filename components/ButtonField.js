import { Text, Pressable, View } from "react-native";
import React from "react";

const ButtonField = ({ onPress, label, styles }) => {
  return (
    <View>
      <Pressable onPress={onPress} style={styles}>
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonField;
