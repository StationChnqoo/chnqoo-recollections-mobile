import {useStore} from '@root/useStore';

import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import moment, {months} from 'moment';
import {rpx} from '@src/constants/x';
import FastImage from 'react-native-fast-image';

interface MyProps {
  item: any;
}

const DailyItem: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {item} = props;
  const {theme} = useStore();

  const loadImages = (images: string[]) => {
    let size = (Dimensions.get('screen').width - 24 - rpx(48) - 24) / 3 - 6;
    const imageViews = () => {
      let array = [...images, ...Array(3 - images.length).fill(null)];

      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
          }}>
          {array.map((it, i) => (
            <View
              key={i}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              {it ? (
                <FastImage
                  source={{uri: `https://www.cctv3.net/assets/${it}`}}
                  style={{height: size, width: size, borderRadius: 10}}
                  resizeMode={'cover'}
                />
              ) : null}
            </View>
          ))}
        </View>
      );
    };
    return [
      null,
      <FastImage
        style={{
          height: size,
          width: '100%',
          marginTop: 12,
        }}
        source={{uri: `https://www.cctv3.net/assets/${images[0]}`}}
        resizeMode={'cover'}
      />,
      imageViews(),
      imageViews(),
    ][images.length];
  };
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 12,
        marginVertical: 6,
      }}>
      <Text
        style={{
          color: '#333',
          fontSize: 18,
          width: rpx(48),
          paddingVertical: 5,
        }}>
        <Text>{moment(item.time).daysInMonth()}/</Text>
        <Text style={{fontSize: 12}}>{moment(item.time).month() + 1}月</Text>
      </Text>
      <View style={{width: 10}} />
      <View style={styles.views}>
        <View style={{flex: 1}}>
          <Text style={{color: '#333', lineHeight: 20, fontSize: 16}}>
            {item.message}
          </Text>
          {loadImages(item.images)}
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
              广东省深圳市
            </Text>
            <Text style={{fontSize: 12, color: '#999'}} numberOfLines={1}>
              12:34
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
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

export default DailyItem;
