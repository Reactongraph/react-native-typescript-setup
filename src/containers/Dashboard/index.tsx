import React, {useEffect, useState} from 'react';
import {View, Image, AsyncStorage} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import {IMAGEDATA} from '../../utils/constants';
import styles from './styles';

interface Props {}
interface State {
  email: String;
}

const Dashboard = props => {
  const [email, setEmail] = useState('');

  const resetNavigation = (navigation: any) => {
    props.navigation.navigate(navigation);
  };

  const storeData = async (key: string, data: string) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      console.warn(error);
    }
  };

  const getLocalData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(async () => {
    const storedData = await getLocalData('credential');
    setEmail(storedData.email);
  }, []);

  const handleLogout = () => {
    storeData('isLoggedIn', '');
    resetNavigation('Login');
  };

  const showSwiper = () => {
    return (
      <Swiper showsButtons>
        {IMAGEDATA.map((image, index) => {
          return (
            <View key={index}>
              <Image
                source={{uri: image.src.original}}
                style={styles.imageStyle}
              />
            </View>
          );
        })}
      </Swiper>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title={`Welcome ${email}`}
        titleTextStyle={styles.titleTextStyle}
        wrapperStyle={styles.wrapperStyle}
        rightText="Logout"
        onPress={handleLogout}
      />
      <View style={styles.imageDataView}>{showSwiper()}</View>
    </View>
  );
};
export default Dashboard;
