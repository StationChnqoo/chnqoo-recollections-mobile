import {rpx} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import DailyItem from '../DailyItem';
import LearnItem from '../LearnItem';

interface MyProps {}

const LearnPanel: React.FC<MyProps> = props => {
  const [datas, setDatas] = useState([
    {
      time: '2024-01-31',
      title: '沪BX DX出租车是劳改犯的专属号',
      message: '',
      images: ['Snipaste_2024-01-18_10-24-06.jpg'],
    },
    {
      time: '1949-10-01',
      title: '测试',
      message: '中华人民共和国成立了，农民翻起来了...',
      images: [],
    },
  ]);

  useEffect(() => {
    // setDatas(Array(10).fill(''));
    return function () {};
  }, []);

  return (
    <FlatList
      data={datas}
      renderItem={({item, index}) => <LearnItem item={item} />}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

const styles = StyleSheet.create({});

export default LearnPanel;
