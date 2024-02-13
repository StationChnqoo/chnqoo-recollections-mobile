import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';
import moment from 'moment';

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tinycolor from 'tinycolor2';

interface MyProps {}

const SearchBar: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {} = props;
  const {theme} = useStore();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  return (
    <View style={styles.views}>
      <View style={styles.viewInputer}>
        <Image
          style={{
            height: 20,
            width: 20,
            tintColor: '#999',
            marginHorizontal: 12,
          }}
          source={require('@src/assets/main/search_bar_zoom.png')}
        />
        <View style={{flex: 1}} />
        <View
          style={[
            styles.viewButton,
            {backgroundColor: tinycolor(theme).setAlpha(0.28).toRgbString()},
          ]}>
          <Text style={{fontSize: 14, color: theme}}>搜索</Text>
        </View>
      </View>
      <View style={{width: 12}} />
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={() => {}}
        style={styles.viewMessageButton}>
        <Image
          style={{height: 20, width: 20, tintColor: '#333'}}
          source={require('@src/assets/main/search_bar_message.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  viewInputer: {
    height: rpx(32),
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMessageButton: {
    height: rpx(32),
    width: rpx(32),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  viewButton: {
    height: rpx(28),
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 4,
  },
});

export default SearchBar;
