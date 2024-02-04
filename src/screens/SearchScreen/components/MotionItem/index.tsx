import {useStore} from '@root/useStore';

import {rpx} from '@src/constants/x';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface MyProps {
  item: any;
}

const MotionItem: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {item} = props;
  const {theme} = useStore();

  return (
    <View style={styles.views}>
      <View style={styles.view}>
        <View style={{flex: 1}}>
          <Text style={{color: '#333', lineHeight: 20, fontSize: 16}}>
            {item.message}
          </Text>
          <View style={{height: 10}} />
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 14, color: '#999'}}>{item.time}</Text>
          </View>
        </View>
      </View>
      <View style={{width: 10}} />
      <FastImage
        source={{uri: `https://www.cctv3.net/wechat/${encodeURI(item.title)}`}}
        style={{height: rpx(36), width: rpx(36)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 6,
  },
  view: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    flex: 1,
  },
  viewTag: {
    width: rpx(66),
    height: rpx(24),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default MotionItem;
