import * as React from 'react';
import { Component } from 'react';
import { View, Image, AsyncStorage } from "react-native";
import Swiper from "react-native-swiper";
import Header from 'src/components/Header';
import styles from './styles';
import Helper from "src/utils/helper";
import { IMAGEDATA } from 'src/utils/constants';

const helperFunctions = new Helper();

interface Props {
}

interface State {
  userName: String;
}


export default class Dashboard extends Component<Props, State > {
  state = {
    userName: ""
  };
  componentDidMount() {
    AsyncStorage.getItem("loginData").then(value => {
      if(value) {
        this.setState({ userName: value });
      }
    });
  }


  handleLogout = () => {
    AsyncStorage.setItem("loginData", "");
    helperFunctions.resetNavigation(this, "Login", null);
  };


  showSwiper = () => {
    return (
      <Swiper showsButtons>
        {IMAGEDATA.map((image, index) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: image.src.original }}
                style={styles.imageStyle}
              />
            </View>
          );
        })}
      </Swiper>
    );
  }

  render() {
    const { userName } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title={`Welcome ${userName}`}
          titleTextStyle={styles.titleTextStyle}
          wrapperStyle={styles.wrapperStyle}
          rightText="Logout"
          onPress={this.handleLogout}
        />
        <View style={styles.imageDataView}>{this.showSwiper()}</View>
      </View>
    );
  }
}