import React from "react";
import {
  Text,
  Button,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const TopBar = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.txt}>{props.title}</Text>
      <Entypo name="dots-three-vertical" size={24} color="black" />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
  },
});
