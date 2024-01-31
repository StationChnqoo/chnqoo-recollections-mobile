import React, {ReactNode, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {rpx} from '@src/constants/x';
import {useStore} from '@root/useStore';
import {AppBottomBarModalItem, NotesType} from '@src/constants/MyTypes';
import {BottomSheet, Button} from '@src/components';
import {useInterval} from 'ahooks';
import LottieView from 'lottie-react-native';

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  onSubmit: (item: AppBottomBarModalItem) => void;
}

const VoiceModal: React.FC<MyProps> = props => {
  const {onSubmit} = props;
  const {theme} = useStore();
  const [status, setStatus] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [interval, setInterval] = useState<number | undefined | null>(
    undefined,
  );

  useInterval(() => {
    setSeconds(t => t + 1);
  }, interval);

  const onPlayPress = () => {
    setSeconds([0, seconds][status]);
    setInterval([1000, undefined][status]);
    setStatus(t => -t + 1);
  };
  return (
    <BottomSheet {...props} hideModalContentWhileAnimating={true}>
      <TouchableOpacity
        onPress={onPlayPress}
        activeOpacity={0.88}
        style={{alignItems: 'center'}}>
        <View style={{height: 16}} />
        {
          [
            null,
            <View style={{alignItems: 'center'}}>
              <Text
                style={{fontWeight: '500', fontSize: rpx(16), color: '#333'}}>
                正在录制
              </Text>
              <View style={{height: 12}} />
              <Text style={{color: '#666', fontSize: rpx(24)}}>{seconds}s</Text>
              <LottieView
                source={require('@src/assets/lottie/wave.json')}
                style={{width: Dimensions.get('screen').width, height: rpx(64)}}
                autoPlay
                loop
                speed={0.28}
              />
              <View style={{height: 12}} />
            </View>,
          ][status]
        }
        <Image
          style={{height: rpx(64), width: rpx(64), tintColor: theme}}
          source={
            [
              require('@src/assets/editor/record_start.png'),
              require('@src/assets/editor/record_stop.png'),
            ][status]
          }
        />
        <View style={{height: 16}} />
      </TouchableOpacity>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  views: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    margin: 0,
    justifyContent: 'flex-end',
  },
  viewItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (Dimensions.get('screen').width - 64) / 4,
    height: rpx(48),
    borderWidth: 1,
    borderRadius: 16,
  },
});

export default VoiceModal;
