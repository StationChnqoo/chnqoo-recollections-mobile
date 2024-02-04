import {rpx} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import MotionItem from '../MotionItem';

interface MyProps {}

const MotionPanel: React.FC<MyProps> = props => {
  const [datas, setDatas] = useState([
    {
      time: '2024-01-31',
      title: '发呆.png',
      message: '这尼玛又要失业了吗？',
    },
    {
      time: '1949-10-01',
      title: '吃瓜.png',
      message: '中华人民共和国成立了，农民翻起来了...',
    },
  ]);

  useEffect(() => {
    // setDatas(Array(10).fill(''));
    return function () {};
  }, []);

  return (
    <FlatList
      data={datas}
      renderItem={({item, index}) => <MotionItem item={item} />}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

const styles = StyleSheet.create({
});

export default MotionPanel;
