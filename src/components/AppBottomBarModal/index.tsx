import React, {ReactNode, useState} from 'react';
import {
  Dimensions,
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
      id: NotesType.TIMER,
      title: '纪念日',
      message: '记录重要的日子 ~',
      checked: true,
    },
    {
      id: NotesType.DAILY,
      title: '写日记',
      message: '愿有深情可回首 ~',
      checked: false,
    },
    {
      id: NotesType.MOTION,
      title: '晒心情',
      message: '此时此刻的感慨 ~',
      checked: false,
    },
    {
      id: NotesType.LEARN,
      title: '学到了',
      message: '我的碎片知识库 ~',
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
          <View>
            <Text style={{fontSize: 16, color: item.checked ? theme : '#666'}}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheet {...props}>
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
      <Button title="开始记录" onPress={onSubmit} />
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

export default AppBottomBarModal;
