import React, { useEffect } from "react";
import { View, AsyncStorage } from "react-native";

const SplashScreen = (props) => {
  const resetNavigation = (navigation: any) => {
    props.navigation.navigate(navigation);
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

  useEffect(() => {
    async function fetchData() {
      const storedData = await getLocalData("isLoggedIn");
      if (storedData) {
        resetNavigation("Dashboard");
      } else {
        resetNavigation("Login");
      }
    }
    fetchData();
  }, []);

  return <View />;
};

export default SplashScreen;
