import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useStore} from './useStore';
import {RootStacksProp} from './ScreenStacks';
import DemoScreen from '@src/screens/DemoScreen';

const Tab = createBottomTabNavigator();
interface AppProps {
  navigation: RootStacksProp;
}

const App: React.FC<AppProps> = props => {
  const {theme} = useStore();

  useEffect(() => {
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
              Timeline: require('@src/assets/menu/calendar.png'),
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
          component={DemoScreen}
          options={{tabBarLabel: '首页'}}
        />
        <Tab.Screen
          name={'Search'}
          component={DemoScreen}
          options={{tabBarLabel: '搜索'}}
        />
        <Tab.Screen
          name={'Timeline'}
          component={DemoScreen}
          options={{tabBarLabel: '时光'}}
        />
        <Tab.Screen
          name={'My'}
          component={DemoScreen}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTabBarStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});

export default App;
