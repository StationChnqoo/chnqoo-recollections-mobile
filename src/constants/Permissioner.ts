import {Platform} from 'react-native';
import {PERMISSIONS, check, request} from 'react-native-permissions';
import Storage from './Storage';

export default class Permissioner {
  cache: Storage = null;
  constructor() {
    this.cache = new Storage();
  }
  async checkPhoto(disableRequest?: boolean) {
    let result = '';
    let permission = Platform.select({
      android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    });
    if ((await this.cache.get(Storage.CHECK_PHOTO)) == '1' || disableRequest) {
      result = await check(permission);
    } else {
      this.cache.set(Storage.CHECK_PHOTO, 1);
      result = await request(permission);
    }
    console.log('checkPhoto: ', result);
    return result == 'granted' || result == 'limited';
  }

  async checkMicrophone(disableRequest?: boolean) {
    let result = '';
    let permission = Platform.select({
      android: PERMISSIONS.ANDROID.RECORD_AUDIO,
      ios: PERMISSIONS.IOS.MICROPHONE,
    });
    if (
      (await this.cache.get(Storage.CHECK_MICROPHONE)) == '1' ||
      disableRequest
    ) {
      result = await check(permission);
    } else {
      this.cache.set(Storage.CHECK_MICROPHONE, 1);
      result = await request(permission);
    }
    console.log('checkMicrophone: ', result);
    return result == 'granted' || result == 'limited';
  }

  async checkGPS(disableRequest?: boolean) {
    let result = '';
    let permission = Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    });
    if ((await this.cache.get(Storage.CHECK_GPS)) == '1' || disableRequest) {
      result = await check(permission);
    } else {
      this.cache.set(Storage.CHECK_GPS, 1);
      result = await request(permission);
    }
    console.log('checkGPS: ', result);
    return result == 'granted' || result == 'limited';
  }
}
