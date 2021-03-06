import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";
import axios from "axios";
import * as Constants from '../book/common/constants';
import Snackbar from 'react-native-snackbar';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      password2: "",
    };
  }

  showMsg(msg) {
    Snackbar.show({
        text: msg,
        backgroundColor: "#ec5959",
        duration: Snackbar.LENGTH_SHORT,
      });
  }

  signUp() {
      const data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
      }

      axios.post(Constants.registerApi, data) 
        .then(response => {
            console.log(response.data)
            if (response.data.response == "Error") {
                this.showMsg(response.data.error_message)
            } else {
                this.props.navigation.navigate('MyStack')
            }
        })
  }

  checkValidations() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.username == "") {
        this.showMsg("Name cannot be empty")
      return false;
    } else if (this.state.email == "") {
        this.showMsg("Email cannot be empty")
      return false;
    } else if (!re.test(this.state.email.toLowerCase())) {
        this.showMsg("Invalid Email")
      return false;
    } else if (this.state.password == "") {
        this.showMsg("Password cannot be empty")
      return false;
    } else if (this.state.password2 == "") {
        this.showMsg("Re-enter your Password")
      return false;
    } else if (this.state.password != this.state.password2) {
        this.showMsg("Password does not matches")
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <FlashMessage position="bottom" />
        <Text
          style={{
            fontWeight: "bold",
            color: "#e91e63",
            margin: 50,
            fontSize: 24,
          }}
        >
          SIGN UP
        </Text>
        <TextInput
          placeholder="Enter Name"
          onChangeText={(text) => this.setState({ username: text })}
          style={{
            width: responsiveWidth(90),
            borderWidth: 1,
            paddingHorizontal: 10,
            borderColor: "#e91e63",
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={(text) => this.setState({ email: text })}
          style={{
            width: responsiveWidth(90),
            borderWidth: 1,
            paddingHorizontal: 10,
            marginTop: 10,
            borderColor: "#e91e63",
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          style={{
            width: responsiveWidth(90),
            borderWidth: 1,
            paddingHorizontal: 10,
            borderColor: "#e91e63",
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <TextInput
          placeholder="Re-enter Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password2: text })}
          style={{
            width: responsiveWidth(90),
            borderWidth: 1,
            paddingHorizontal: 10,
            borderColor: "#e91e63",
            borderRadius: 10,
            marginTop: 10,
          }}
        />

        <TouchableOpacity
          onPress={() => {
            if (this.checkValidations()) {
              this.signUp()
            }
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
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>Already have an account ? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ fontWeight: "bold", color: "#e91e63" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
