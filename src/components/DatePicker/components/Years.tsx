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
  onPress: (year: string | number) => void;
  panelHeight: number;
}

const Years: React.FC<MyProps> = props => {
  const {theme} = useStore();
  const {params, onPress, panelHeight} = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.views}>
        {Array.from({length: 20}, (_, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.viewItemContainer, {height: panelHeight / 4}]}
            onPress={() => {
              onPress(i + 2010);
            }}>
            <Text
              style={{
                fontSize: 16,
                color: params.year == i + 2010 ? theme : '#666',
              }}>
              {i + 2010}
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

export default Years;
