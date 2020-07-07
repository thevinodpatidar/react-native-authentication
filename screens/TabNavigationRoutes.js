import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from './tabScreen/HomeScreen';
import SettingsScreen from './tabScreen/SettingScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Setting: SettingsScreen
    },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

          if (routeName === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          }else if(routeName === "Setting"){
            iconName = focused ? 'settings' : 'settings-outline'
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);