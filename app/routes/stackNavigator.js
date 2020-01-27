import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../pages/SplashScreen';
import AuthScreen from '../pages/Auth';
import AppScreen from '../pages/App';
import MateriScreen from '../pages/Materi';

export const SplashScreenStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export const AuthStack = createStackNavigator({
  AuthScreen: {
    screen: AuthScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export const AppStack = createStackNavigator(
  {
    AppScreen: {
      screen: AppScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    MateriScreen: {
      screen: MateriScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'MateriScreen',
  },
);
