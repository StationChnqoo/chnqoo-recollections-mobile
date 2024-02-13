import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';
import React, {ReactNode, useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, Switch, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import tinycolor from 'tinycolor2';

interface MyProps {
  children: ReactNode;
}

const BeautyTitleBar: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {children} = props;
  const {theme} = useStore();
  return (
    <LinearGradient
      style={{}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[
        tinycolor(theme).setAlpha(0.88).toRgbString(),
        tinycolor(theme).setAlpha(0.58).toRgbString(),
      ]}>
      <View
        style={{
          height: Platform.select({
            ios: Math.max(useSafeAreaInsets().top, 24),
            android: 0,
          }),
        }}
      />
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  views: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  viewDot: {
    width: rpx(64),
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    alignSelf: 'center',
    marginVertical: 12,
  },
});

export default BeautyTitleBar;
