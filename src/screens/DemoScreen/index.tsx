import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const DemoScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);
  return <View style={{flex: 1}}></View>;
};

const styles = StyleSheet.create({
  viewCard: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  textTitle: {
    fontSize: 16,
    color: '#333',
  },
  viewGroupTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default DemoScreen;