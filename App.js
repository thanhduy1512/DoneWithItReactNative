import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import Cat from "./Cat";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>
        Hello React Native Hello - A really really long text. And a bit longer
        to see what happen
      </Text>
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        style={{ width: 200, height: 300 }}
      />
      <Button
        color=""
        title="Click me"
        onPress={() => {
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ]);
        }}
        // onPress={() => {
        //   Alert.prompt("My title", "My message", (text) => console.log(text));
        // }}
      />
      <Cat name="Duy" />
      <Cat name="Drake" />
      <Cat name="Dexter" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
  },
});
