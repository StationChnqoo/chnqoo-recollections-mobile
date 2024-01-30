import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface MyProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
}

const Button: React.FC<MyProps> = props => {
  const {title, onPress, disable} = props;
  const {theme} = useStore();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.88}
      style={[styles.view, {backgroundColor: theme}]}>
      <Text style={{fontSize: 16, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: rpx(44),
  },
});

export default Button;
