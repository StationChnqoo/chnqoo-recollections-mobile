import {useStore} from '@root/useStore';
import {BottomSheet} from '@src/components';
import {AppBottomBarModalItem} from '@src/constants/MyTypes';
import {rpx} from '@src/constants/x';
import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
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
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  onSubmit: (audio: {url: string; seconds: number}) => void;
}

const VoiceModal: React.FC<MyProps> = props => {
  const {onSubmit} = props;
  const {theme} = useStore();
  const [status, setStatus] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const onPlayPress = () => {
    if (status == 0) {
      setSeconds(0);
      onStartRecord();
      setStatus(1);
    } else if (status == 1) {
      onStopRecord();
      setStatus(0);
    }
  };

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(data => {
      setSeconds(data.currentPosition);
    });
    console.log('onStartRecord: ', result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    console.log('onStopRecord: ', result);
    onSubmit({url: result, seconds});
  };

  return (
    <BottomSheet
      {...props}
      hideModalContentWhileAnimating={true}
      disableBackdropPress={status == 1}>
      <View style={{alignItems: 'center'}}>
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
              <Text style={{color: '#666', fontSize: rpx(24)}}>
                {(seconds / 1000).toFixed(0).toString()}s
              </Text>
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
        <TouchableOpacity onPress={onPlayPress} activeOpacity={0.88}>
          <Image
            style={{height: rpx(64), width: rpx(64), tintColor: theme}}
            source={
              [
                require('@src/assets/editor/record_start.png'),
                require('@src/assets/editor/record_stop.png'),
              ][status]
            }
          />
        </TouchableOpacity>
        <View style={{height: 16}} />
      </View>
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
