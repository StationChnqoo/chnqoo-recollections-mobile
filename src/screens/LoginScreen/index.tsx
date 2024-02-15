import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {Button, TitleBar} from '@src/components';

import {useStore} from '@root/useStore';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {} from './components';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const ITEMS_INTERVAL_SPACE = 2;
const LoginScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {navigation} = props;
  const [emoji, setEmoji] = useState('666666.png');
  const [isAgree, setIsAgree] = useState(false);
  const {theme} = useStore();
  const [mobile, setMobile] = useState('');

  const line = () => <View style={{height: ITEMS_INTERVAL_SPACE}} />;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'登录'}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 12, backgroundColor: 'white'}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            Hi~ 欢迎使用Chnqoo Notes
          </Text>

          <View style={{height: 32}} />
          <View style={{}}>
            <TextInput
              value={mobile}
              onChangeText={setMobile}
              placeholder={'请输入手机号'}
              keyboardType={'number-pad'}
              style={{fontSize: 16, paddingVertical: 0}}
            />
            <View style={{height: 1, backgroundColor: '#eee', margin: 10}} />
            <Text style={{fontSize: 12, color: '#999', paddingHorizontal: 8}}>
              未注册的手机号将自动创建ChnqooNotes账号
            </Text>
          </View>
          <View style={{height: 32}} />
          <Button
            title={'获取短信验证码'}
            // style={{marginHorizontal: 12}}
            onPress={() => {
              navigation.navigate('SmsScreen', {mobile});
            }}
          />
          <View style={{height: 108}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <BouncyCheckbox
              isChecked={isAgree}
              onPress={setIsAgree}
              fillColor={theme}
              size={16}
              style={{}}
              disableText={true}
              hitSlop={{top: 16, bottom: 16, left: 16, right: 16}}
            />
            <View style={{width: 4}} />
            <Text style={{fontSize: 14, color: '#999'}}>
              我已阅读并同意<Text style={{color: theme}}>《注册协议》</Text>
            </Text>
            <Text style={{fontSize: 14, color: '#999'}}>
              <Text style={{color: theme}}>《隐私政策》</Text>
            </Text>
          </View>
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

export default LoginScreen;
