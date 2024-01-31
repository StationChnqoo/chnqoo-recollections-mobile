import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';
import {TitleBar} from '@src/components';

import React, {useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CalendarItem, LocationItem, PhotoItem, VoiceItem} from './components';

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
  return (
    <View style={{flex: 1, backgroundColor: '#F3F9F1'}}>
      <TitleBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'编辑'}
      />
      <View style={{height: 10}} />
      <View style={{flex: 1}}>
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
            />
          </View>
          <View style={{height: ITEMS_INTERVAL_SPACE}} />
          <LocationItem />
          <View style={{height: ITEMS_INTERVAL_SPACE}} />
          <CalendarItem />
          <View style={{height: ITEMS_INTERVAL_SPACE}} />
          <VoiceItem />
          <View style={{height: ITEMS_INTERVAL_SPACE}} />
          <PhotoItem onPhotosSelected={urls => {}} />
          <View style={{height: 16}} />
        </ScrollView>
      </View>
      <View
        style={{height: useSafeAreaInsets().bottom, backgroundColor: 'white'}}
      />
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

export default NoteEditorScreen;
