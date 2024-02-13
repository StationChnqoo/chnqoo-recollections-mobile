import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {BeautyTitleBar} from '@src/components';
import { Colors } from '@src/constants/x';

import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const CommunityScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Colors.page}}>
      <StatusBar translucent={false} />
      <View
        style={{height: useSafeAreaInsets().top, backgroundColor: 'white'}}
      />
    </View>
  );
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

export default CommunityScreen;
