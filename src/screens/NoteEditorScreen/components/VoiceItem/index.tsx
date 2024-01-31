import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import VoiceModal from '../VoiceModal';
import VoiceProgressBar from '../VoiceProgressBar';
const audioRecorderPlayer = new AudioRecorderPlayer();

interface MyProps {}

const VoiceItem: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {} = props;
  const {theme} = useStore();
  const [voiceModal, setVoiceModal] = useState(false);
  const [audio, setAudio] = useState('');
  const [playStatus, setPlayStatus] = useState(0);
  const [playProgress, setPlayProgress] = useState(0);
  const [playTotal, setPlayTotal] = useState(0);

  const onPlayPress = async () => {
    if (playStatus == 0) {
      await onStartPlay();
      setPlayStatus(1);
    } else if (playStatus == 1) {
      await onStopPlay();
      setPlayStatus(0);
    }
  };

  const onStartPlay = async () => {
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      setPlayProgress(e.currentPosition / e.duration);
      if ((e.currentPosition / e.duration) * 100 > 99) {
        onStopPlay();
      }
    });
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setPlayStatus(0);
  };

  return (
    <View style={styles.views}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('@src/assets/editor/voice.png')}
          style={{height: rpx(18), width: rpx(18), tintColor: theme}}
        />
        <View style={{width: 6}} />
        <Text style={{fontSize: 16, color: theme}}>录音</Text>
      </View>

      {audio ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <VoiceProgressBar
            progress={[1, playProgress][playStatus]}
            total={`${(playTotal / 1000).toFixed(1)}″`}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={onPlayPress}
              style={[styles.viewTag, {borderColor: theme}]}>
              <Text style={{fontSize: 14, color: theme}}>
                {['播放', '结束'][playStatus]}
              </Text>
            </TouchableOpacity>
            <View style={{width: 12}} />
            <TouchableOpacity
              activeOpacity={0.88}
              onPress={async () => {
                await onStopPlay();
                setAudio('');
              }}>
              <Image
                source={require('@src/assets/editor/delete.png')}
                style={{height: 14, width: 14, tintColor: theme}}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          activeOpacity={0.88}
          onPress={() => {
            setVoiceModal(true);
          }}>
          <Text style={{color: '#666', fontSize: 14}}>点击录音（选填）</Text>
          <Image
            source={require('@src/assets/common/row_more.png')}
            style={{height: 18, width: 18, tintColor: '#999'}}
          />
        </TouchableOpacity>
      )}
      <VoiceModal
        onShow={() => {}}
        onHide={() => {}}
        onClose={() => {
          setVoiceModal(false);
        }}
        isVisible={voiceModal}
        onSubmit={data => {
          setAudio(data.url);
          setPlayTotal(data.seconds);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    paddingHorizontal: 12,
    height: rpx(48),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  viewTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default VoiceItem;
