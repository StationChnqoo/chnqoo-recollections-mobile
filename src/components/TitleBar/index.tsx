import {Styles, rpx} from '@src/constants/x';
import React, {ReactNode, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  title: string;
  onBackPress: () => void;
  moreView?: ReactNode;
}

const TitleBar: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  const {title, onBackPress, moreView} = props;
  return (
    <View style={[{backgroundColor: 'white'}, Styles.card({})]}>
      <View style={{height: useSafeAreaInsets().top}} />
      <View style={styles.view}>
        <TouchableOpacity
          hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}
          activeOpacity={0.88}
          onPress={onBackPress}>
          <Image
            style={styles.imageBack}
            source={require('@src/assets/common/row_back.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#333', fontWeight: '500'}}>
          {title}
        </Text>
        {moreView ? moreView : <View style={styles.imageBack} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  imageBack: {
    height: 20,
    width: 20,
  },
});

export default TitleBar;
