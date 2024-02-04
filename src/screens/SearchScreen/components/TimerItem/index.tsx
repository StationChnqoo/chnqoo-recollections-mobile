import {useStore} from '@root/useStore';

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment, {months} from 'moment';
import {rpx} from '@src/constants/x';

interface MyProps {
  item: any;
}

const TimerItem: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {item} = props;
  const {theme} = useStore();

  const nextDaysCalculator = (targetDate: string) => {
    const today = moment();
    const target = moment(targetDate).set('year', new Date().getFullYear());
    let result = 0;
    const currentYear = moment().year();
    if (target.isSameOrAfter(today, 'day')) {
      result = target.diff(today, 'days');
    } else {
      const nextYearTarget = moment(target).year(currentYear + 1);
      result = nextYearTarget.diff(today, 'days');
    }
    return result;
  };

  /**
   *
   * @param key
   * @param value
   */
  const buildItem = (key: string, value: string) => {
    return (
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Text style={{fontSize: 14, color: '#666', fontWeight: 'bold'}}>
          {key}
        </Text>
        <View style={{width: 10}} />
        <Text style={{fontSize: 14, color: '#666'}}>{value}</Text>
      </View>
    );
  };
  return (
    <View style={styles.views}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 16}} numberOfLines={1}>
          {item.title}
        </Text>

        <View style={[styles.viewTag, {borderColor: theme}]}>
          <Text style={{color: theme, fontSize: 14}}>{`${moment().diff(
            item.time,
            'days',
          )}天`}</Text>
        </View>
      </View>
      <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 12}} />
      {buildItem('事件日期', item.time)}
      <View style={{height: 10}} />
      {buildItem('下次纪念', `还有${nextDaysCalculator(item.time)}天`)}
      <View style={{height: 10}} />
      {buildItem('我的感想', item.message)}
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    marginHorizontal: 12,
    marginVertical: 6,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
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

export default TimerItem;
