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
  TouchableWithoutFeedback,
} from 'react-native';
import { Header } from "../book/common/header";
class LatestBook extends Component {
  
  render() {
    return (
         <View style={styles.container}>
           <Header/>
            <TouchableWithoutFeedback >
              <View>
                <Text>LATEST TAB</Text>
              </View>
            </TouchableWithoutFeedback>
             
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

export default LatestBook;

