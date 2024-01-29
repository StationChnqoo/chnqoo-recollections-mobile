import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import BottomSheet from '../BottomSheet';

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
}

const AppBottomBarModal: React.FC<MyProps> = props => {
  return (
    <BottomSheet {...props}>
      <Text>呵呵</Text>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  views: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    margin: 0,
    justifyContent: 'flex-end',
  },
});

export default AppBottomBarModal;
