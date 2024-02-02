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
  onPress: (day: string | number) => void;
  panelHeight: number;
  weekTitles?: string[]; // ['日', '一', '二', '三', '四‘， '五', '六']
}

const Day: React.FC<MyProps> = props => {
  const {theme} = useStore();
  const {
    params,
    onPress,
    panelHeight,
    weekTitles = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  } = props;

  const calcDaysInThisMonth = (
    year: string | number,
    month: string | number,
  ) => {
    const date = new Date(parseInt(`${year}`), parseInt(`${month}`) - 1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
  };

  const calcDaysInThisWeek = (
    year: string | number,
    month: string | number,
    day: string | number,
  ) => {
    const date = new Date(
      parseInt(`${year}`),
      parseInt(`${month}`) - 1,
      parseInt(`${day}`),
    );
    const dayOfWeek = date.getDay(); // 获取星期几，0 表示周日，1 表示周一，以此类推
    return ((dayOfWeek + 6) % 7) + 1; // 将周日作为第一天，返回对应的天数
  };
  const days = calcDaysInThisMonth(params.year, params.month);
  const headDays = calcDaysInThisWeek(params.year, params.month, 1);
  let tailDays =
    (days + headDays) % 7 == 0
      ? 0
      : 7 * (Math.floor((days + headDays) / 7) + 1) - (days + headDays);

  let datas = [
    ...Array(headDays).fill(null),
    ...Array.from({length: days}, (_, i) => ({name: '', value: `${i + 1}`})),
    ...Array(tailDays).fill(null),
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {weekTitles.map((it, i) => (
          <View
            key={i}
            style={[styles.viewItemContainer, {height: panelHeight / 6}]}>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 16,
                color: '#333',
              }}>
              {it}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.views}>
        {datas.map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.viewItemContainer, {height: panelHeight / 6}]}
            onPress={() => {
              onPress(_.value);
            }}>
            {_ ? (
              <Text
                style={{
                  fontSize: 16,
                  color: params.day == datas[i]?.value ? theme : '#666',
                }}>
                {_.value}
              </Text>
            ) : null}
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
    width: (Dimensions.get('screen').width - 32) / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Day;
