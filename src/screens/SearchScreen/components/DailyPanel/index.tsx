import {Styles, rpx} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import DailyItem from '../DailyItem';

interface MyProps {}

const DailyPanel: React.FC<MyProps> = props => {
  const [datas, setDatas] = useState([
    {
      time: '2024-01-31',
      title: '发呆.png',
      message: '这尼玛又要失业了吗？',
      images: ['Snipaste_2024-01-18_11-16-43.jpg'],
    },
    {
      time: '1949-10-01',
      title: '吃瓜.png',
      message: '中华人民共和国成立了，农民翻起来了...',
      images: [],
    },
    {
      time: '1949-10-01',
      title: '吃瓜.png',
      message: '中华人民共和国成立了，农民翻起来了...',
      images: [
        'Snipaste_2024-01-23_22-11-10.jpg',
        'Snipaste_2024-01-24_10-06-30.jpg',
        'Snipaste_2024-01-22_19-59-26.jpg',
      ],
    },
  ]);

  useEffect(() => {
    // setDatas(Array(10).fill(''));
    return function () {};
  }, []);

  return (
    <FlatList
      data={datas}
      renderItem={({item, index}) => <DailyItem item={item} />}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

const styles = StyleSheet.create({});

export default DailyPanel;
