import {useStore} from '@root/useStore';
import {rpx, useWechatEmoji} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

interface MyProps {
  value: string;
  onPress: (emoji: string) => void;
}

const WechatItem: React.FC<MyProps> = props => {
  const {value, onPress} = props;
  const {theme} = useStore();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    return function () {};
  }, []);

  const itemWidth = (Dimensions.get('screen').width - 24) / 8;
  return (
    <View style={{}}>
      <View style={styles.views}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: `https://www.cctv3.net/wechat/${value}`}}
            style={{height: rpx(20), width: rpx(20)}}
          />
          <View style={{width: 6}} />
          <Text style={{fontSize: 16, color: theme}}>心情</Text>
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          activeOpacity={0.88}
          hitSlop={{top: 12, bottom: 12}}
          onPress={() => {
            setStatus(t => -t + 1);
          }}>
          <Text style={{color: '#666', fontSize: 14}}>
            {['请选择', '收起'][status]}
          </Text>
          <Image
            source={
              [
                require('@src/assets/common/row_more_open.png'),
                require('@src/assets/common/row_more_close.png'),
              ][status]
            }
            style={{height: rpx(18), width: rpx(18), tintColor: '#999'}}
          />
        </TouchableOpacity>
      </View>
      {
        [
          null,
          <View style={[styles.viewEmojisContainer]}>
            {useWechatEmoji.map((it, i) => (
              <TouchableOpacity
                activeOpacity={0.88}
                onPress={() => {
                  onPress(it);
                }}
                key={i}
                style={[
                  styles.viewEmojiContainer,
                  {
                    width: itemWidth,
                    borderRadius: itemWidth / 2,
                    height: itemWidth,
                  },
                  {borderColor: value == it ? theme : 'transparent'},
                ]}>
                <FastImage
                  source={{uri: `https://www.cctv3.net/wechat/${it}`}}
                  style={{height: itemWidth - 12, width: itemWidth - 12}}
                />
              </TouchableOpacity>
            ))}
          </View>,
        ][status]
      }
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
    marginTop: 12,
  },
  viewTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  viewEmojisContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
  },
  viewEmojiContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    borderWidth: 1,
  },
});

export default WechatItem;
