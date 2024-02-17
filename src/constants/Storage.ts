import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  constructor() {}
  static CHECK_PHOTO = 'isCheckedPhoto';
  static CHECK_MICROPHONE = 'isCheckedMicrophoe';
  static CHECK_GPS = 'isCheckedGPS';
  
  async get(key: string, defaultValue?: any) {
    let result = await AsyncStorage.getItem(key);
    return result || defaultValue;
  }

  async set(key: string, value: any) {
    let result = await AsyncStorage.setItem(key, value);
    return true;
  }
}
