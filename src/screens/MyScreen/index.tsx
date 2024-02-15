import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {rpx} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ThemeModal} from './components';
import {useStore} from '@root/useStore';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const MyScreen: React.FC<MyProps> = props => {
  const [isShowThemeModal, setIsShowThemeModal] = useState(false);
  const {setTheme} = useStore();

  useEffect(() => {
    return function () {};
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={styles.viewToobar}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 12,
          }}>
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              setIsShowThemeModal(true);
            }}
            hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
            <Image
              source={require('@src/assets/my/theme.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      <ThemeModal
        onShow={() => {}}
        onClose={() => {
          setIsShowThemeModal(false);
        }}
        isVisible={isShowThemeModal}
        onHide={() => {}}
        onSubmit={color => {
          setTheme(color);
          setIsShowThemeModal(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewToobar: {
    height: rpx(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
});

export default MyScreen;
