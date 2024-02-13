import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';

import {BeautyTitleBar} from '@src/components';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SearchBar} from './components';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const HomeScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <BeautyTitleBar>
        <SearchBar />
      </BeautyTitleBar>
      <ScrollView></ScrollView>
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

export default HomeScreen;
