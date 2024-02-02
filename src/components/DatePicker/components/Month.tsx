import {useStore} from '@root/useStore';
import React from 'react';
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
  onPress: (month: string | number) => void;
  panelHeight: number;
  monthTitles?: [];
}

const Month: React.FC<MyProps> = props => {
  const {theme} = useStore();
  const {
    params,
    onPress,
    panelHeight,
    monthTitles = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.views}>
        {Array.from({length: 12}, (_, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.viewItemContainer, {height: panelHeight / 4}]}
            onPress={() => {
              onPress(i + 1);
            }}>
            <Text
              style={{
                fontSize: 16,
                color: params.month == i + 1 ? theme : '#666',
              }}>
              {monthTitles[i]}
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
    width: (Dimensions.get('screen').width - 32) / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Month;
