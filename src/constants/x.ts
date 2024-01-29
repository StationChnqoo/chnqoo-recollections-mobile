import {Dimensions} from 'react-native';

/**
 * 微信屏幕适配
 * @param n
 * @returns
 */
const rpx = (n: number) => (Dimensions.get('screen').width / 375) * n;

export {rpx};
