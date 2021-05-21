import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Button,
  Text,
  View,
} from 'react-native';
import { Header } from "../book/common/header"
class BookInfo extends Component {
  
  render() {
    return (
         <View style={styles.container}>
           <Header/>
              <Text>Book Info</Text> 
         </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
});

export default BookInfo;
