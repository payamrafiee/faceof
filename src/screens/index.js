import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Entypo, EvilIcons } from '@expo/vector-icons';

import AuthLoadingScreen from './AuthLoadingScreen';
import SplashScreen from './SplashScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
);

const AuthStack = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
    Signup: { screen: SignupScreen },
    Login: { screen: LoginScreen },
  },
);

const AppStack = createBottomTabNavigator({
  Home: { screen: HomeStack },
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

class Navigation extends Component {
  state = { }
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default Navigation;

// import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
// import React, { Component } from 'react';

// import SignupScreen from './SignupScreen';
// import LoginScreen from './LoginScreen';

// const AuthNavigator = createStackNavigator(
//   {
//     login: {screen: LoginScreen},
//     signup: {screen: SignupScreen},
//   }
// );

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       getScreen: () => require('./HomeScreen').default,
//     },
//   }
// );

// const MainNavigator = createStackNavigator({
//   Tab: TabNavigator,
// });

// const AppNavigator = createSwitchNavigator(
//   {
//     Splash: {
//       getScreen: () => require('./SplashScreen').default,
//     },
//     Auth: AuthNavigator,
//     Main: MainNavigator,
//   }, {
//     initialRouteName: 'Splash',
//   }
// );

// class Navigation extends Component {
//   state = { }
//   render() {
//     return (
//       <AppNavigator />
//     );
//   }
// }

// export default Navigation;
