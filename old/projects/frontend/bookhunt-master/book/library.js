import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Header } from "../book/common/header";
import { Tab } from "../book/tab";
import axios from "axios";
import * as Constants from "../book/common/constants";
import Cover from "../assets/book_placeholder.svg";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "books",
      booksData: [],
      genresData: [],
      authorsData: [],
      authorPrevious: "",
      authorNext: "",
      pageNo: 0,
    };
  }

  callActiveTab = (type) => {
    this.setState({ activeTab: type });
  };

  getBookDetails = (data) => {
    this.props.navigation.navigate("BookInfo");
  };

  componentDidMount() {
    this.getBooksData(1);
    this.getGenresData(1);
    this.getAuthorsData(Constants.getAuthorsApi);
  }

  getBooksData(pageNo) {
    this.setState({
      pageNo: pageNo,
    });
    console.log(Constants.getBooksApi + "?pageno=" + pageNo);
    axios.get(Constants.getBooksApi + "?pageno=" + pageNo).then((response) => {
      let bookData = response.data;
      console.log("BoosDta", response.data);
      // if (pageNo > 1) {
      //   this.setState(prevState => ({
      //     booksData: [...prevState.booksData, ...bookData],
      //   }))
      // } else {
      this.setState({
        booksData: bookData,
      });
      // }
    });
  }

  getGenresData(pageNo) {
    this.setState({
      pageNo: pageNo,
    });
    console.log(Constants.getGenresApi + "?pageno=" + pageNo);
    axios.get(Constants.getGenresApi + "?pageno=" + pageNo).then((response) => {
      let genresData = response.data;
      console.log("genres", response.data);
      // if (pageNo > 1) {
      //   this.setState(prevState => ({
      //     booksData: [...prevState.booksData, ...bookData],
      //   }))
      // } else {
      this.setState({
        genresData: genresData,
      });
      // }
    });
  }

  getAuthorsData(url) {
    console.log(url);
    axios.get(url).then((response) => {
      let authorsData = response.data.results;
      console.log("authors", response.data);
      // if (pageNo > 1) {
      //   this.setState(prevState => ({
      //     booksData: [...prevState.booksData, ...bookData],
      //   }))
      // } else {
      this.setState({
        authorsData: authorsData,
        authorPrevious: response.data.previous,
        authorNext: response.data.next,
      });
      // }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.innerContainer}>
          <Tab
            mainTab="library"
            activeTab={this.state["activeTab"]}
            callActiveTab={() => this.callActiveTab("books")}
            type="books"
            label="Books"
            customWidth="34"
          />
          <Tab
            mainTab="library"
            activeTab={this.state["activeTab"]}
            callActiveTab={() => this.callActiveTab("genre")}
            type="genre"
            label="Genre"
            customWidth="34"
          />
          <Tab
            mainTab="library"
            activeTab={this.state["activeTab"]}
            callActiveTab={() => this.callActiveTab("author")}
            type="author"
            label="Authors"
            customWidth="34"
          />
          {/*  tab content starts */}
        </View>
        <View style={styles.tabContent}>
          <View
            style={
              this.state["activeTab"] === "books"
                ? [styles.activeTabPane, styles.display]
                : styles.none
            }
          >
            {/* Book data starts */}
            {/* onMomentumScrollBegin={() => this.getBooksData(this.state.pageNo+1)} */}
            <FlatList
              data={this.state.booksData}
              renderItem={({ item }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 10,
                    marginBottom: 15,
                    borderRadius: 10,
                    backgroundColor: "#e5e5e5",
                  }}
                >
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: item.book_cover_url,
                    }}
                  />
                  <TouchableWithoutFeedback
                    onPress={() => this.getBookDetails(item)}
                  >
                    <View
                      style={{
                        width: responsiveWidth(39),
                        height: responsiveHeight(5),
                        backgroundColor: "#e91e63",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        borderRadius: 10,
                        bottom: -15,
                        paddingHorizontal: 10,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {item.book_name}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>

                  {/* <Text style={styles.item}  
                                           
                                            >{item.title}</Text> */}
                </View>
              )}
              numColumns={2}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={(item, index) => index.toString()}
            />

            {/* Book data ends */}
          </View>
          <View
            style={
              this.state["activeTab"] === "genre"
                ? [styles.activeTabPane, styles.display]
                : styles.none
            }
          >
            <FlatList
              data={this.state.genresData}
              contentContainerStyle={{ alignItems: "center" }}
              renderItem={({ item }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 15,
                    borderRadius: 20,
                    backgroundColor: "#e5e5e5",
                  }}
                >
                  <View style={{ padding: 30 }}>
                    <Cover height={50} width={50} />
                  </View>
                  <TouchableWithoutFeedback
                    onPress={() => this.getBookDetails(item)}
                  >
                    <View
                      style={{
                        width: responsiveWidth(39),
                        height: responsiveHeight(5),
                        backgroundColor: "#e91e63",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomStartRadius: 20,
                        paddingHorizontal: 10,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {item.genre_name}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>

                  {/* <Text style={styles.item}  
                                           
                                            >{item.title}</Text> */}
                </View>
              )}
              numColumns={2}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View
            style={
              this.state["activeTab"] === "author"
                ? [styles.activeTabPane, styles.display]
                : styles.none
            }
          >
            <FlatList
              data={this.state.authorsData}
              contentContainerStyle={{
                alignItems: "center",
                paddingBottom: 60,
              }}
              renderItem={({ item }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 15,
                    marginBottom: 20,
                    borderRadius: 10,
                    backgroundColor: "#e5e5e5",
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <Image
                      style={{
                        width: 100,
                        aspectRatio: 1,
                        resizeMode: "contain",
                      }}
                      source={{ uri: item.profilepicture }}
                    />
                  </View>
                  <TouchableWithoutFeedback
                    onPress={() => this.getBookDetails(item)}
                  >
                    <View
                      style={{
                        width: responsiveWidth(34),
                        height: responsiveHeight(5),
                        backgroundColor: "#e91e63",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        bottom: -20,
                        marginHorizontal: 15,
                        paddingHorizontal: 10,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {item.author_name}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>

                  {/* <Text style={styles.item}  
                                           
                                            >{item.title}</Text> */}
                </View>
              )}
              numColumns={2}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={(item, index) => index.toString()}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: responsiveWidth(90),
                alignSelf: "center",
                position: "absolute",
                bottom: 2,
                justifyContent: "space-between",
                backgroundColor: "transparent",
              }}
            >
              <TouchableOpacity onPress={() => this.getAuthorsData(this.state.authorPrevious)}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: "#e91e63",
                    width: responsiveWidth(30),
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: "#fff",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Previous
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.getAuthorsData(this.state.authorNext)}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: "#e91e63",
                    width: responsiveWidth(30),
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: "#fff",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Next
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#fff",
  },
  innerContainer: {
    flexDirection: "row",
    padding: 0,
  },
  none: {
    display: "none",
  },
  block: {
    display: "flex",
  },

  tabContent: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
    height: responsiveHeight(50),
  },
  activeTabPane: {
    alignItems: "center",
    width: "100%",
  },
  tabContentText: {},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  tinyLogo: {
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    marginTop: 10,
    marginLeft: 15,
  },
});

export default Library;
