import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {TitleBar} from '@src/components';

import {useStore} from '@root/useStore';
import {useInterval} from 'ahooks';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'SmsScreen'>;
}

const ITEMS_INTERVAL_SPACE = 2;
const SECONDS = 10;
const SmsScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {navigation, route} = props;
  const [emoji, setEmoji] = useState('666666.png');
  const [isAgree, setIsAgree] = useState(false);
  const {theme} = useStore();
  const [seconds, setSeconds] = useState(0);

  const line = () => <View style={{height: ITEMS_INTERVAL_SPACE}} />;
  const [mobile, setMobile] = useState('');
  const [buttonStatus, setButtonStatus] = useState(0); // [倒计时中, 重新发送]
  const [interval, setInterval] = useState<number | undefined>(undefined);

  useInterval(() => {
    setSeconds(t => t + 1);
  }, interval);

  useEffect(() => {
    setButtonStatus(1);
    setInterval(1000);
    return function () {};
  }, []);

  useEffect(() => {
    if (seconds == SECONDS) {
      setButtonStatus(1);
      setInterval(undefined);
      setSeconds(0);
    }
    return function () {};
  }, [seconds]);

  const onButtonPress = async () => {
    if (buttonStatus == 1) {
      setButtonStatus(0);
      setInterval(1000);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={''}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 12, backgroundColor: 'white'}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>输入验证码</Text>
          <Text style={{fontSize: 12, color: '#999', marginVertical: 8}}>
            {`验证码已通过短信发送到 ${route.params.mobile}`}
          </Text>
          <View style={{height: 32}} />
          <View style={{}}>
            <TextInput
              placeholder={'请输入验证码'}
              value={mobile}
              onChangeText={setMobile}
              keyboardType={'numeric'}
              style={{fontSize: 16, paddingVertical: 0}}
            />
            <View style={{height: 1, backgroundColor: '#eee', margin: 10}} />
          </View>
          <TouchableOpacity
            activeOpacity={0.88}
            style={{margin: 8}}
            hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}
            onPress={onButtonPress}>
            <Text style={{color: theme, fontSize: 14}}>
              {[`${SECONDS - seconds}s`, '重新发送'][buttonStatus]}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputerTitle: {
    color: '#333',
    fontWeight: '500',
    fontSize: 16,
  },
  inputerMessage: {
    color: '#333',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    height: Dimensions.get('screen').width * 0.618,
  },
});

export default SmsScreen;
