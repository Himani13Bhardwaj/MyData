import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Text,
  StatusBar,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default class SplashScreen extends React.Component {
  async componentDidMount() {
    const token = await AsyncStorage.getItem("token");

    if (token != undefined && token != null) {
      setTimeout(() => {
        this.props.navigation.navigate("MyStack");
      }, 2000);
    } else {
      setTimeout(() => {
        this.props.navigation.navigate("Login");
      }, 2000);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 32, color: "#fff" }}>
          Book Hunt
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e91e63",
  },
});
