import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';
import moment from 'moment';

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface MyProps {}

const CalendarItem: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {} = props;
  const {theme} = useStore();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  /**
   * 快捷日期填充
   * @param name
   * @param value
   * @returns
   */
  const buildTag = (name: string, value: string) => {
    return (
      <TouchableOpacity
        style={[styles.viewTag, {borderColor: value == date ? theme : '#999'}]}
        activeOpacity={0.88}
        hitSlop={{top: 12, bottom: 12}}
        onPress={() => {
          setDate(value);
        }}>
        <Text style={{color: value == date ? theme : '#999', fontSize: 14}}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {buildTag('昨天', moment().add(-1, 'days').format('YYYY-MM-DD'))}
        <View style={{width: 10}} />
        {buildTag('今天', moment().format('YYYY-MM-DD'))}
        <View style={{width: 10}} />
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          activeOpacity={0.88}
          hitSlop={{top: 12, bottom: 12}}
          onPress={() => {
            setIsShowDatePicker(true);
          }}>
          <Text style={{color: '#666', fontSize: 14}}>{date}</Text>
          <Image
            source={require('@src/assets/common/row_more_horizontal.png')}
            style={{height: rpx(18), width: rpx(18), tintColor: '#999'}}
          />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal={true}
        mode={'date'}
        open={isShowDatePicker}
        date={new Date(date)}
        onConfirm={date => {
          setIsShowDatePicker(false);
          setDate(moment(date).format('YYYY-MM-DD'));
        }}
        onCancel={() => {
          setIsShowDatePicker(false);
        }}
        confirmText={'确认'}
        cancelText={'取消'}
        title={'请选择日期'}
        androidVariant={'iosClone'}
        locale={'zh-CN'}
      />
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

export default CalendarItem;
