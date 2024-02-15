import {useStore} from '@root/useStore';
import {BottomSheet, Button} from '@src/components';
import {Colors, rpx} from '@src/constants/x';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
BottomSheet;

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  onSubmit: (color: string) => void;
  style?: StyleProp<ViewStyle>;
}

const ThemeModal: React.FC<MyProps> = props => {
  const {theme, setTheme} = useStore();
  const [color, setColor] = useState(theme);
  const {onSubmit} = props;

  return (
    <BottomSheet
      {...props}
      onShow={() => {
        setColor(theme);
      }}
      hideModalContentWhileAnimating={true}>
      <Text style={{fontSize: rpx(20), color: '#333', fontWeight: '500'}}>
        请选择主题颜色
      </Text>
      <View style={{height: 16}} />
      <View style={styles.viewItems}>
        {Colors.theme.map((it, i) => {
          let checked = color == it.dark;
          return (
            <TouchableOpacity
              activeOpacity={0.88}
              key={i}
              style={[
                styles.viewItem,
                {
                  backgroundColor: checked ? it.dark : it.light,
                  borderColor: checked ? it.dark : it.light,
                },
              ]}
              onPress={() => {
                setColor(it.dark);
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{color: checked ? 'white' : it.dark, fontSize: 14}}>
                  {it.value}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{height: 16}} />
      <Button
        title={'确认'}
        onPress={() => {
          onSubmit(color);
        }}
        style={{backgroundColor: color}}
      />
      <View style={{height: 10}} />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  viewItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  viewItem: {
    paddingVertical: 5,
    marginVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    width: (Dimensions.get('screen').width - 32) / 6 - 4,
  },
});

export default ThemeModal;
