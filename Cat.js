import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
} from "react-native";

const Cat = (props) => {
  let image = { uri: "https://reactnative.dev/docs/assets/p_cat1.png" };
  return (
    <View>
      <Text>I am {props.name}!</Text>
      <Image style={{ height: 200, width: 200 }} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //   paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
  },
});

export default Cat;
