import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TimerItem from '../TimerItem';

interface MyProps {}

const TimerPanel: React.FC<MyProps> = props => {
  const [datas, setDatas] = useState([
    {
      time: '2024-01-31',
      title: '差点儿又一次失业',
      message: '打工是不可能的 ...',
    },
    {
      time: '1949-10-01',
      title: '中华人民共和国成立',
      message: '农民翻身农奴做主人...',
    },
  ]);

  useEffect(() => {
    // setDatas(Array(10).fill(''));
    return function () {};
  }, []);

  return (
    <FlatList
      data={datas}
      renderItem={({item, index}) => <TimerItem item={item} />}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

const styles = StyleSheet.create({});

export default TimerPanel;
