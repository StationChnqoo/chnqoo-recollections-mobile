import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AppBottomBarModal, TodoEditorModal} from '@src/components';
import {NotesType} from '@src/constants/MyTypes';
import {rpx} from '@src/constants/x';
import CommunityScreen from '@src/screens/CommunityScreen';
import DemoScreen from '@src/screens/DemoScreen';
import HomeScreen from '@src/screens/HomeScreen';
import MyScreen from '@src/screens/MyScreen';
import SearchScreen from '@src/screens/SearchScreen';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStacksProp} from './ScreenStacks';
import {useStore} from './useStore';
import moment from 'moment';
import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import LoginScreen from '@src/screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

interface AppProps {
  navigation: RootStacksProp;
}

const App: React.FC<AppProps> = props => {
  const {navigation} = props;
  const {theme, todos, setTodos, mergeTodos} = useStore();
  const [modal, setModal] = useState({index: 0, ready: false});

  useEffect(() => {
    moment.locale();
    return function () {};
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'slide'}}
      drawerContent={props => {
        return <DrawerItemList {...props} />;
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  viewModalButton: {
    height: rpx(48),
    width: rpx(48),
    borderRadius: rpx(24),
    justifyContent: 'center',
    alignItems: 'center',
    top: -12,
    alignContent: 'center',
    alignSelf: 'center',
    shadowColor: '#333',
    shadowOffset: {
      width: 1,
      height: 12,
    },
    shadowOpacity: 0.28,
    shadowRadius: rpx(24),
    elevation: 4,
  },
});

export default App;
