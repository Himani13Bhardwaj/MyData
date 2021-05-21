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
import { Tab } from '../book/tab';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Header } from "../book/common/header";
class Collection extends Component {
  constructor(props){
    super(props);
    this.state={
       activeTab : 'readingBook'
    }
  }

  callActiveTab=(type)=>{
    this.setState({'activeTab' : type});
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.innerContainer}>

          <Tab mainTab="collection" activeTab = {this.state['activeTab']}
            callActiveTab = {()=>this.callActiveTab('readingBook')} type="readingBook"
            label="Reading Books"
            customWidth = "50" />
          <Tab mainTab="collection" activeTab = {this.state['activeTab']}
            callActiveTab = {()=>this.callActiveTab('recentBook')} type="recentBook"
            label="Recent Books"
            customWidth = "50"
             />
              {/*  tab content starts */}
        </View>    
          <View style={styles.tabContent}>
              <View style={this.state['activeTab']==='readingBook' ? 
              [styles.activeTabPane , styles.display] : styles.none}>
                  <Text style={styles.tabContentText}>Reading Books tab Opened</Text>
              </View>
              <View style={this.state['activeTab']==='recentBook' ? 
              [styles.activeTabPane , styles.display] : styles.none}>
                  <Text>Recent Books tab Opened</Text>
              </View>
          </View>
              {/*  tab content ends */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer:{
    flexDirection:'row',
    padding:0,  
  },
  none:{
    display:'none'
  },
  block:{
    display:'flex'
  },

  tabContent:{
    backgroundColor: '#fff',
    flex:1,
    flexDirection:'row',
    borderRadius:5,
    marginTop:0,
    borderWidth:1,
    borderColor:'#DBDBDB',
    height:responsiveHeight(50),
    borderStyle:'solid',
  }, 
  activeTabPane:{
    padding:10,
    marginTop:10,
    marginLeft:10
  },
  tabContentText:{

  },
});

export default Collection;

