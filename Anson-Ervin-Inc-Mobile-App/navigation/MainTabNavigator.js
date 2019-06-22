import React from 'react';
import { Platform } from 'react-native';
import { 
  createStackNavigator, 
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreenView from '../screens/HomeView';
import AboutScreen from '../screens/AboutView';
import ContactScreen from '../screens/ContactView';
import ProductView from '../screens/ProductView'
import PayrollScreen from '../screens/PayrollView';
import CrossPlatformView from '../screens/productScreens/CrossPlatformAppScreen';
import NativeAppView from '../screens/productScreens/NativeAppScreen';
import WebAppView from '../screens/productScreens/WebAppScreen';
import WebsiteView from '../screens/productScreens/WebsiteScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreenView,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const ProductStack = createStackNavigator(
  {
  Products: ProductView,
  CrossPlatform: CrossPlatformView,
  NativeApp: NativeAppView,
  WebApp: WebAppView,
  Website: WebsiteView,
  }, {
    initialRouteName: 'Products',
    headerBackTitleVisible: true,
    headerMode: 'screen'
  }
);

ProductStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AboutUsStack = createStackNavigator({
  About: AboutScreen,
});

AboutUsStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});

ContactStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


const HomeScreen = createBottomTabNavigator({
  HomeStack,
  ProductStack,
  ContactStack,
});

export default createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
    Payroll: {
      screen: PayrollScreen,
    }
  }, {
    initialRouteName: 'Home',
    drawerType: 'back',
    drawerPosition: 'right',
    drawerWidth: 200,
    drawerBackgroundColor: 'white'
  }
)
