import {useStore} from '@root/useStore';

import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

interface MyProps {
  total: string;
  progress: number;
}

const PROGRESS_BAR_WIDTH = Dimensions.get('screen').width * 0.38;

const VoiceProgressBar: React.FC<MyProps> = props => {
  const {total, progress} = props;
  const {theme} = useStore();
  return (
    <View style={[styles.views]}>
      <View
        style={{
          position: 'absolute',
          width: PROGRESS_BAR_WIDTH * progress,
          backgroundColor: theme,
          height: 28,
          borderRadius: 12,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 8,
        }}>
        <Image
          source={require('@src/assets/editor/listen.png')}
          style={{height: 16, width: 16, tintColor: 'white'}}
        />
        <View style={{width: 5}} />
        <Text style={{color: 'white', fontSize: 14}}>{total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    marginHorizontal: 12,
    width: PROGRESS_BAR_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row',
    height: 28,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#eee',
    position: 'relative',
  },
});

export default VoiceProgressBar;
