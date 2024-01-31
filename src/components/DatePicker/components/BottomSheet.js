import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

const BottomSheet = props => {
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
    onBackdropPress,
    hideModalContentWhileAnimating,
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
        onClose?.();
      }}
      hasBackdrop={false}
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
    width: 64,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    alignSelf: 'center',
    marginVertical: 12,
  },
});

export default BottomSheet;
