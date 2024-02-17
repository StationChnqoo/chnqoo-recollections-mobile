import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {Button, TitleBar} from '@src/components';

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  CalendarItem,
  LocationItem,
  PhotoItem,
  VoiceItem,
  WechatItem,
} from './components';
var CryptoJS = require('crypto-js');

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const ITEMS_INTERVAL_SPACE = 2;
const NoteEditorScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {navigation} = props;
  const [emoji, setEmoji] = useState('666666.png');

  const line = () => <View style={{height: ITEMS_INTERVAL_SPACE}} />;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'编辑'}
      />
      <View style={{height: 1}} />
      <ScrollView>
        <View style={{backgroundColor: 'white', padding: 15}}>
          <TextInput
            style={styles.inputerTitle}
            placeholder={'标题（选填）'}
            numberOfLines={1}
          />
          <View
            style={{height: 1, backgroundColor: '#eee', marginVertical: 6}}
          />
          <TextInput
            style={styles.inputerMessage}
            placeholder={'内容（必填）'}
            multiline={true}
            textAlignVertical={'top'}
          />
        </View>
        <WechatItem value={emoji} onPress={setEmoji} />
        <LocationItem />
        <CalendarItem />
        <VoiceItem />
        <PhotoItem onPhotosSelected={urls => {}} />
        <View style={{height: 24}} />
        <View style={{padding: 12, backgroundColor: 'white'}}>
          <Button
            title={'确认发布'}
            // style={{marginHorizontal: 12}}
            onPress={() => {
              console.log('onButtonPress');
              navigation.navigate('LoginScreen');
            }}
          />
        </View>
        <View
          style={{
            height: useSafeAreaInsets().bottom,
            backgroundColor: 'white',
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputerTitle: {
    color: '#333',
    fontWeight: '500',
    fontSize: 16,
    padding: 0,
    paddingVertical: 0,
  },
  inputerMessage: {
    color: '#333',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    padding: 0,
    paddingVertical: 0,
    height: Dimensions.get('screen').width * 0.618,
  },
});

export default NoteEditorScreen;
