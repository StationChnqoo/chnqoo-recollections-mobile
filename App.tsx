import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useStore} from './useStore';
import {RootStacksProp} from './ScreenStacks';
import DemoScreen from '@src/screens/DemoScreen';
import {rpx} from '@src/constants/x';
import HomeScreen from '@src/screens/HomeScreen';
import SearchScreen from '@src/screens/SearchScreen';
import CommunityScreen from '@src/screens/CommunityScreen';
import MyScreen from '@src/screens/MyScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppBottomBarModal} from '@src/components';

const Tab = createBottomTabNavigator();
interface AppProps {
  navigation: RootStacksProp;
}

const App: React.FC<AppProps> = props => {
  const {theme} = useStore();
  const [modalButtonStatus, setModalButtonStatus] = useState(0);

  useEffect(() => {
    return function () {};
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{height: useSafeAreaInsets().top, backgroundColor: 'white'}}
      />
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShadowVisible: true,
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let icon = {
              Home: require('@src/assets/menu/movie.png'),
              Search: require('@src/assets/menu/notebook.png'),
              Community: require('@src/assets/menu/direction.png'),
              My: require('@src/assets/menu/my.png'),
            }[route.name];

            return (
              <Image
                source={icon}
                style={{height: 28, width: 28, tintColor: color}}
              />
            );
          },
          tabBarActiveTintColor: theme,
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{tabBarLabel: '首页'}}
        />
        <Tab.Screen
          name={'Search'}
          component={SearchScreen}
          options={{tabBarLabel: '搜索'}}
        />
        <Tab.Screen
          name={'Modal'}
          component={DemoScreen}
          options={{
            tabBarButton: tabProps => (
              <TouchableOpacity
                activeOpacity={0.88}
                onPress={() => {
                  setModalButtonStatus(t => -t + 1);
                }}
                style={[styles.viewModalButton, {backgroundColor: theme}]}>
                <Image
                  source={
                    [
                      require('@src/assets/menu/modal_open.png'),
                      require('@src/assets/menu/modal_close.png'),
                    ][modalButtonStatus]
                  }
                  style={{tintColor: 'white', height: rpx(24), width: rpx(24)}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name={'Community'}
          component={CommunityScreen}
          options={{tabBarLabel: '社区'}}
        />
        <Tab.Screen
          name={'My'}
          component={MyScreen}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
      <AppBottomBarModal
        isVisible={modalButtonStatus == 1}
        onClose={() => {
          setModalButtonStatus(0);
        }}
        onHide={() => {}}
        onShow={() => {}}
        onSubmit={item => {
          console.log(item.id);
          setModalButtonStatus(0);
        }}
      />
    </View>
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
