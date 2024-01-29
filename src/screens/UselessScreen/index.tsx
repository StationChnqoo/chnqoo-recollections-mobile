/** 空白页面，没什么卵用 ... */
import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const UselessScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);
  return <View style={{flex: 1}}></View>;
};

const styles = StyleSheet.create({});

export default UselessScreen;
