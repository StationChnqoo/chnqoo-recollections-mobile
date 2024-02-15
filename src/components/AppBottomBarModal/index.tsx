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
import BottomSheet from '../BottomSheet';
import {rpx} from '@src/constants/x';
import Button from '../Button';
import {useStore} from '@root/useStore';
import {AppBottomBarModalItem, NotesType} from '@src/constants/MyTypes';
import Services from '@src/constants/Services';

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  onSubmit: (item: AppBottomBarModalItem) => void;
}

const AppBottomBarModal: React.FC<MyProps> = props => {
  const [items, setItems] = useState<AppBottomBarModalItem[]>([
    {
      id: NotesType.DAILY,
      title: '日记',
      src: require('@src/assets/main/module_daily.png'),
      checked: false,
    },
    {
      id: NotesType.MOTION,
      title: '碎碎念',
      src: require('@src/assets/main/module_motion.png'),
      checked: false,
    },
    {
      id: NotesType.TIMER,
      title: '纪念日',
      src: require('@src/assets/main/module_timer.png'),
      checked: true,
    },
    {
      id: NotesType.LEARN,
      title: '笔记',
      src: require('@src/assets/main/module_learn.png'),
      checked: false,
    },
  ]);
  const {onSubmit} = props;
  const {theme} = useStore();

  const buildItem = (item: any) => {
    return (
      <TouchableOpacity
        key={item.title}
        onPress={() => {
          let _items = [...items];
          for (let i = 0; i < _items.length; i++) {
            _items[i].checked = _items[i].id == item.id;
          }
          setItems(_items);
        }}
        activeOpacity={0.88}
        style={[styles.viewItem, {borderColor: item.checked ? theme : '#eee'}]}>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={item.src}
              style={{
                height: rpx(32),
                width: rpx(32),
                tintColor: item.checked ? theme : '#999',
              }}
            />
            <View style={{height: 6}} />
            <Text style={{fontSize: 16, color: item.checked ? theme : '#666'}}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheet {...props} hideModalContentWhileAnimating={true}>
      <Text style={{fontSize: rpx(20), color: '#333', fontWeight: '500'}}>
        此时此刻想记录点什么？
      </Text>
      <View style={{height: 16}} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {items.map(it => buildItem(it))}
      </View>
      <View style={{height: 16}} />
      <Button
        title="开始记录"
        onPress={async () => {
          // let result = await new Services().selectLogin();
          // console.log('selectLogin: ', result);
          onSubmit(items.find(it => it.checked));
        }}
      />
      <View style={{height: 10}} />
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
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 12,
  },
});

export default AppBottomBarModal;
