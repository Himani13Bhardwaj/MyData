
import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SplashScreen from "./book/splashscreen";
import { MyStack } from "./book/common/MyStack";
import BookInfo from "./book/bookinfo";
import Login from "./book/Login";
import SignUp from "./book/SignUp";

// import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="MyStack" component={MyStack} options={{headerShown: false}}/>
        <Stack.Screen name="BookInfo" component={BookInfo} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
