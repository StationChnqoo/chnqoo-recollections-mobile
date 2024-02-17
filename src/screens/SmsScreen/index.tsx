import {CommonActions, RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {TitleBar} from '@src/components';

import {useStore} from '@root/useStore';
import {useInterval} from 'ahooks';
import React, {useEffect, useState} from 'react';
import {
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
const SECONDS = 120;
const SmsScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {navigation, route} = props;
  const {theme} = useStore();
  const [seconds, setSeconds] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(0); // [倒计时中, 重新发送]
  const [interval, setInterval] = useState<number | undefined>(1000);
  const [code, setCode] = useState('');

  useInterval(() => {
    setSeconds(t => t + 1);
  }, interval);

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

  useEffect(() => {
    if (code == '666666') {
      navigation.dispatch(state => {
        const routes = [...state.routes].filter(
          it => !(it.name == 'LoginScreen' || it.name == 'SmsScreen'),
        );
        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
      });
    }
    return function () {};
  }, [code]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={''}
      />
      <View style={{height: 12}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 16, backgroundColor: 'white'}}>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#333'}}>
            输入验证码
          </Text>
          <Text style={{fontSize: 12, color: '#999', marginVertical: 8}}>
            {`验证码已通过短信发送到 ${route.params.mobile}`}
          </Text>
          <View style={{height: 32}} />
          <View style={{}}>
            <TextInput
              placeholder={'请输入验证码'}
              value={code}
              onChangeText={setCode}
              keyboardType={'numeric'}
              style={{fontSize: 16, paddingVertical: 0}}
            />
            <View style={{height: 1, backgroundColor: '#eee', margin: 10}} />
          </View>
          <TouchableOpacity
            activeOpacity={0.88}
            style={{marginVertical: 8, marginHorizontal: 4}}
            hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}
            onPress={onButtonPress}>
            <Text style={{color: theme, fontSize: 14}}>
              {[`${SECONDS - seconds}s后重新发送`, '重新发送'][buttonStatus]}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SmsScreen;
