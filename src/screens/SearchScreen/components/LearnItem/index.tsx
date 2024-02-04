import {useStore} from '@root/useStore';

import {rpx} from '@src/constants/x';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface MyProps {
  item: any;
}

const LearnItem: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {item} = props;
  const {theme} = useStore();

  return (
    <View style={styles.views}>
      {
        [
          null,
          <FastImage
            source={{uri: `https://www.cctv3.net/assets/${item.images[0]}`}}
            style={styles.imageCover}
          />,
        ][Math.min(1, item.images.length)]
      }
      <View style={{flex: 1}}>
        <Text style={{color: '#333', lineHeight: 20, fontSize: 16}}>
          {item.title}
        </Text>
        <View style={{height: 10}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{flex: 1, fontSize: 14, color: '#999'}}
            numberOfLines={1}>
            {item.message || '暂无描述 ~'}
          </Text>
          <Text style={{fontSize: 12, color: '#999'}} numberOfLines={1}>
            {item.time}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 6,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
  },
  imageCover: {
    height: rpx(50),
    width: rpx(50),
    borderRadius: 8,
    marginRight: 8,
  },
});

export default LearnItem;
