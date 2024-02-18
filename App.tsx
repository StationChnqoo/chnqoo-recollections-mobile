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

const Tab = createBottomTabNavigator();
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
    <View
      style={{
        flex: 1,
      }}>
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
          options={{tabBarLabel: '归档'}}
        />
        <Tab.Screen
          name={'Modal'}
          component={DemoScreen}
          options={{
            tabBarButton: tabProps => (
              <TouchableOpacity
                activeOpacity={0.88}
                onPress={() => {
                  setModal({index: 0, ready: true});
                }}
                style={[styles.viewModalButton, {backgroundColor: theme}]}>
                <Image
                  source={require('@src/assets/menu/modal_open.png')}
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
        isVisible={modal.index == 0 && modal.ready}
        onClose={() => {
          setModal({index: 0, ready: false});
        }}
        onHide={() => {
          if (modal.index != 0) {
            setModal({index: modal.index, ready: true});
          }
        }}
        onShow={() => {}}
        onSubmit={item => {
          console.log(item.id);
          // new Services().selectLogin();
          if (item.id == NotesType.TODO) {
            setModal({index: 1, ready: false});
            // navigation.navigate('TodoEditorScreen');
          } else {
            navigation.navigate('NoteEditorScreen');
          }
        }}
      />
      <TodoEditorModal
        isVisible={modal.index == 1 && modal.ready}
        onClose={() => {
          setModal({index: 0, ready: false});
        }}
        onHide={() => {
          setModal({index: 0, ready: false});
        }}
        onShow={() => {}}
        onSubmit={item => {
          mergeTodos(item);
          setModal({index: 0, ready: false});
        }}
        onDeletePress={todo => {}}
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
