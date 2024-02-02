import {useStore} from '@root/useStore';
import {rpx} from '@src/constants/x';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheet, Day, Month, Year} from './components';

export interface DateParams {
  year: string | number;
  month: string | number;
  day: string | number;
}

interface MyProps {
  isVisible: boolean;
  date: string;
  onConfirm: (date: string) => void;
  onCancel: () => void;
}

const DatePicker: React.FC<MyProps> = props => {
  const {isVisible, onConfirm, onCancel, date} = props;
  const {theme} = useStore();
  const [status, setStatus] = useState(0);
  const [params, setParams] = useState<DateParams>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDay(),
  });
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    let datas = date.split(/-/);
    setParams({
      year: datas[0],
      month: datas[1],
      day: datas[2],
    });
    return function () {};
  }, [date]);

  /**
   *
   * @param key
   * @param value
   */
  const onParamsChange = (key: string, value: string | number) => {
    let _params = {...params};
    _params[key] = parseInt(`${value}`);
    // console.log('onParamsChange: ', _params);
    setParams(_params);
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      onClose={onCancel}
      onHide={() => {}}
      onShow={() => {
        setStatus(0);
      }}
      hideModalContentWhileAnimating={true}
      style={{height: Dimensions.get('screen').width * 0.618}}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          disabled={status == 0}
          onPress={() => {
            setStatus(t => t - 1);
          }}>
          <Text style={{fontSize: 18, color: '#333', fontWeight: '500'}}>
            {
              [
                'Please select',
                `${params.year}`,
                `${params.year}/${params.month}`,
              ][status]
            }
          </Text>
        </TouchableOpacity>
        <View
          style={{flex: 1}}
          onLayout={e => {
            setPanelHeight(e.nativeEvent.layout.height);
          }}>
          {
            [
              <Year
                params={params}
                onPress={t => {
                  onParamsChange('year', t);
                  setStatus(1);
                }}
                panelHeight={panelHeight}
              />,
              <Month
                params={params}
                onPress={t => {
                  onParamsChange('month', t);
                  setStatus(2);
                }}
                panelHeight={panelHeight}
              />,
              <Day
                params={params}
                onPress={t => {
                  onParamsChange('day', t);
                }}
                panelHeight={panelHeight}
                // weekTitles={['日', '一', '二', '三', '四', '五', '六']}
              />,
            ][status]
          }
        </View>
      </View>
    </BottomSheet>
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

export default DatePicker;
