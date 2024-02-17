import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DailyPanel, LearnPanel, MotionPanel, TimerPanel} from './components';
import {Styles} from '@src/constants/x';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const SearchScreen: React.FC<MyProps> = props => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    return function () {};
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <StatusBar translucent={false} />
      <View
        style={{height: useSafeAreaInsets().top, backgroundColor: 'white'}}
      />
      <View style={{flex: 1}}>
        <View
          style={[
            {
              paddingHorizontal: 32,
              paddingVertical: 8,
              backgroundColor: 'white',
            },
            Styles.card({}),
          ]}>
          <SegmentedControl
            values={['全部', '日记', '纪念日', '心情', '笔记']}
            selectedIndex={index}
            onChange={event => {
              setIndex(event.nativeEvent.selectedSegmentIndex);
            }}
          />
        </View>
        {
          [
            null,
            <DailyPanel />,
            <TimerPanel />,
            <MotionPanel />,
            <LearnPanel />,
          ][index]
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewCard: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  textTitle: {
    fontSize: 16,
    color: '#333',
  },
  viewGroupTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default SearchScreen;
