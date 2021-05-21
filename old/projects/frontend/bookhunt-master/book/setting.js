import AsyncStorage from "@react-native-community/async-storage";
import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Button,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { Header } from "../book/common/header";

class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TouchableOpacity
          style={{ position: "absolute", bottom: 10 }}
          onPress={() => {
            AsyncStorage.clear();
            this.props.navigation.reset({
              routes: [{ name: "Login" }],
            });
          }}
        >
          <View
            style={{
              width: responsiveWidth(90),
              backgroundColor: "#e91e63",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              padding: 10,
              margin: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Setting;
