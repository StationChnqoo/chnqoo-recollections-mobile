import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {TitleBar} from '@src/components';
import DatePicker from '@src/components/DatePicker';

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const DemoScreen: React.FC<MyProps> = props => {
  const {navigation} = props;
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  useEffect(() => {
    return function () {};
  }, []);

  return (
    <View style={{flex: 1}}>
      <TitleBar
        title={'测试'}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              setIsShowDatePicker(true);
            }}
            hitSlop={{top: 12, bottom: 12}}>
            <Text>Open DatePicker</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DatePicker
        isVisible={isShowDatePicker}
        date={'2024-02-02'}
        onConfirm={date => {}}
        onCancel={() => {
          setIsShowDatePicker(false);
        }}
      />
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

export default DemoScreen;
