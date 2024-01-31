import {rpx} from '@src/constants/x';
import React, {ReactNode, useEffect} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  disableBackdropPress?: boolean;
  hideModalContentWhileAnimating?: boolean;
}

const BottomSheet: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {
    isVisible,
    onHide,
    onShow,
    onClose,
    children,
    style,
    hideModalContentWhileAnimating,
    disableBackdropPress,
  } = props;
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
        !disableBackdropPress && onClose?.();
      }}
      animationInTiming={361}
      animationOutTiming={618}
      animationIn={'slideInUp'}
      onModalHide={() => {
        onHide?.();
      }}
      hideModalContentWhileAnimating={hideModalContentWhileAnimating}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <View
        style={[
          styles.views,
          {paddingBottom: useSafeAreaInsets().bottom},
          style,
        ]}>
        <View style={styles.viewDot} />
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  views: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  viewDot: {
    width: rpx(64),
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    alignSelf: 'center',
    marginVertical: 12,
  },
});

export default BottomSheet;
