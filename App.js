import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import * as Font from 'expo-font';
 
import { Provider } from 'react-redux';
import axios from 'axios';
import { createSwitchNavigator } from 'react-navigation';
import axiosMiddleware from 'redux-axios-middleware';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import reducer from './reducer';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';
import Profile from './Profile';
import Profile2 from './Profile2';
import { Icon } from 'react-native-material-ui';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {
  FlexibleTabBarComponent,
  withCustomStyle,
} from 'react-navigation-custom-bottom-tab-component/FlexibleTabBarComponent';

const store = createStore(reducer, applyMiddleware(axiosMiddleware()));

const Tabs = createBottomTabNavigator({
  RepoList: {
    screen: RepoList,
	    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="home" size={25} color={'#1F273E'} />
        ),
      },
  },
  Wallpapers: {
    screen: Profile,
	  navigationOptions: {
        tabBarLabel: 'Wallpapers',
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name="image" size={25} color={tintColor} />
        ),
      },
  },
  Güncellemeler: {
    screen: Profile2,
	  navigationOptions: {
        tabBarLabel: 'Updates',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="update" size={25} color={tintColor} />
        ),
      },
  },
  
},
   {
    tabBarComponent: withCustomStyle({
      style: {
        backgroundColor: '#1F273E',
      },
      labelStyle: {
        fontSize: 22,
        flex: 1,
        fontFamily: 'Regular',
      },
    })(FlexibleTabBarComponent),
    tabBarOptions: {
      activeTintColor: '#1F273E',
      //activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },}
);

const MainStack = createStackNavigator({
  Home: {
    screen: Tabs,
	  navigationOptions: {
      header: null,
    },
  },
  RepoDetail: {
    screen: RepoDetail,
  },
  RepoList: {
    screen: RepoList,
  },
  Profile: {
    screen: Profile,
  },  Profile2: {
    screen: Profile2,
  },
});

const AppContainer = createAppContainer(MainStack);

export default class App extends Component {
  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
        'Regular': require('./assets/Regular.ttf'),
        'Bold': require('./assets/Bold.ttf'),
        'Bignoodletoo': require('./assets/bignoodletoo.ttf'),
      });
      this.setState({ fontLoaded: true });
    })();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
