import {useStore} from '@root/useStore';
import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DateParams} from '..';

interface MyProps {
  params: DateParams;
  onPress: (year: string | number) => void;
  panelHeight: number;
}

const Year: React.FC<MyProps> = props => {
  const {theme} = useStore();
  const {params, onPress, panelHeight} = props;
  const scrollView = useRef<ScrollView>(null);

  useEffect(() => {
    console.log({panelHeight});
    scrollView?.current.scrollTo({
      y: Math.ceil(((parseInt(`${params.year}`) - 1900) / 5) * panelHeight) / 4.5,
      animated: true,
    });
    return function () {};
  }, [params.year, panelHeight]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} ref={scrollView}>
      <View style={styles.views}>
        {Array.from({length: 200}, (_, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.viewItemContainer, {height: panelHeight / 4}]}
            onPress={() => {
              onPress(i + 1900);
            }}>
            <Text
              style={{
                fontSize: 16,
                color: params.year == i + 1900 ? theme : '#666',
              }}>
              {i + 1900}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  views: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  viewItemContainer: {
    width: (Dimensions.get('screen').width - 32) / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Year;
