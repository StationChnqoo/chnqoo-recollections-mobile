import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface MyProps {
  value: string;
}

const WechatItem: React.FC<MyProps> = props => {
  const {value} = props;
  const {theme} = useStore();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    return function () {};
  }, []);

  return (
    <View style={styles.views}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('@src/assets/editor/calendar.png')}
          style={{height: rpx(18), width: rpx(18), tintColor: theme}}
        />
        <View style={{width: 6}} />
        <Text style={{fontSize: 16, color: theme}}>日期</Text>
      </View>
      
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
  viewTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default WechatItem;
