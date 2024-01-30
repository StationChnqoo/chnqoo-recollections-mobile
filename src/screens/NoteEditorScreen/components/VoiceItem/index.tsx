import { useStore } from '@root/useStore';
import { rpx } from '@src/constants/x';

import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyProps {}

const VoiceItem: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {} = props;
  const {theme} = useStore();

  return (
    <View style={styles.views}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('@src/assets/editor/voice.png')}
          style={{height: rpx(18), width: rpx(18), tintColor: theme}}
        />
        <View style={{width: 6}} />
        <Text style={{fontSize: 16, color: theme}}>录音</Text>
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        activeOpacity={0.88}>
        <Text style={{color: '#666', fontSize: 14}}>选填</Text>
        <Image
          source={require('@src/assets/common/row_more.png')}
          style={{height: rpx(18), width: rpx(18), tintColor: '#999'}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export default VoiceItem;
