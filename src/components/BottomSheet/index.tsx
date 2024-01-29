import React, {ReactNode, useEffect} from 'react';
import {Dimensions, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const BottomSheet: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {isVisible, onHide, onShow, onClose, children, style} = props;
  return (
    <Modal
      isVisible={isVisible}
      onModalShow={() => {
        onShow?.();
      }}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      statusBarTranslucent={true}
      onBackdropPress={() => {
        onClose?.();
      }}
      animationInTiming={361}
      animationOutTiming={618}
      animationIn={'slideInUp'}
      onModalHide={() => {
        onHide?.();
      }}
      style={{margin: 0, justifyContent: 'flex-end'}}
      >
      <View
        style={[
          styles.views,
          {paddingBottom: useSafeAreaInsets().bottom},
          style,
        ]}>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  views: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default BottomSheet;
