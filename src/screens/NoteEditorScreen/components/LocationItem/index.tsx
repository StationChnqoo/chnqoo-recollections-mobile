import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';
import moment from 'moment';

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {
  onPress: () => void;
}

const LocationItem: React.FC<MyProps> = props => {
  const {onPress} = props;
  const {theme} = useStore();

  useEffect(() => {
    return function () {};
  }, []);

  return (
    <View style={styles.views}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('@src/assets/editor/location.png')}
          style={{height: rpx(18), width: rpx(18), tintColor: theme}}
        />
        <View style={{width: 6}} />
        <Text style={{fontSize: 16, color: theme}}>位置</Text>
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        activeOpacity={0.88}
        hitSlop={{top: 12, bottom: 12}}
        onPress={onPress}>
        <Text style={{color: '#666', fontSize: 14}}>广东省深圳市</Text>
        <Image
          source={require('@src/assets/common/row_more_horizontal.png')}
          style={{height: rpx(18), width: rpx(18), tintColor: '#999'}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    paddingHorizontal: 12,
    height: rpx(48),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export default LocationItem;
