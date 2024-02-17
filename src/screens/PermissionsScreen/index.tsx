import {
  CommonActions,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {TitleBar} from '@src/components';

import {useStore} from '@root/useStore';
import {useInterval} from 'ahooks';
import React, {useCallback, useEffect, useState} from 'react';
import {
  AppState,
  Linking,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Permissioner from '@src/constants/Permissioner';
import {Styles} from '@src/constants/x';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'SmsScreen'>;
}

const PermissionsScreen: React.FC<MyProps> = props => {
  const {navigation, route} = props;
  const {theme} = useStore();
  const [datas, setDatas] = useState([]);

  const checkPermissions = async () => {
    const permissioner = new Permissioner();
    setDatas([
      {
        title: '相册',
        message:
          '当你使用编写日记、笔记，发布话题等服务时，我们将向你申请相册权限',
        checked: await permissioner.checkPhoto(true),
      },
      {
        title: '位置',
        message:
          '当你使用编写日记、笔记，发布话题等服务时，我们将向你申请位置权限',
        checked: await permissioner.checkGPS(true),
      },
      {
        title: '麦克风',
        message: '当你使用编写日记、笔记等服务时，我们将向你申请麦克风权限',
        checked: await permissioner.checkMicrophone(true),
      },
    ]);
  };

  useEffect(() => {
    checkPermissions();
    return function () {};
  }, []);
  
  useEffect(() => {
    let appState = AppState.addEventListener('focus', () => {
      checkPermissions();
    });
    return function () {
      appState.remove();
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'权限管理'}
      />
      <View style={{height: 12}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {datas.map((it, i) => (
          <TouchableOpacity
            style={[styles.viewItem, Styles.card({borderRadius: 12})]}
            key={i}
            activeOpacity={0.88}
            onPress={() => {
              Linking.openSettings();
            }}>
            <View style={Styles.row({justifyContent: 'space-between'})}>
              <Text style={{fontWeight: '500', fontSize: 16, color: '#333'}}>
                {it.title}
              </Text>
              <Switch
                value={it.checked}
                onChange={() => {
                  Linking.openSettings();
                }}
              />
            </View>
            <View style={{height: 4}} />
            <Text style={{color: '#666', fontSize: 14, lineHeight: 18}}>
              {it.message}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewItem: {
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'white',
  },
});

export default PermissionsScreen;
