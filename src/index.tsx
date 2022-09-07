import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from './containers/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './containers/Login';
import SplashScreen from './containers/SplashScreen';
import SignUpScreen from './containers/SignUp';

const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <NavigationContainer {...props}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return <AppNavigator />;
};

export default App;
