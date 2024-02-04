import {Dimensions} from 'react-native';

/**
 * 微信屏幕适配
 * @param n
 * @returns
 */
const rpx = (n: number) => (Dimensions.get('screen').width / 375) * n;

const useWechatEmoji = [
  '666666.png',
  '福.png',
  '再见.png',
  '发呆.png',
  '发财.png',
  '口罩.png',
  '可爱.png',
  '叹气.png',
  '吃瓜.png',
  '唏嘘.png',
  '嘿哈.png',
  '奋斗.png',
  '好的.png',
  '惆怅.png',
  '惊恐.png',
  '感谢.png',
  '打脸.png',
  '抱拳.png',
  '捂脸.png',
  '旺财.png',
  '机智.png',
  '流汗.png',
  '滑稽.png',
  '烟花.png',
  '白眼.png',
  '皱眉.png',
  '礼物.png',
  '社会.png',
  '祝贺.png',
  '红包.png',
  '苦涩.png',
  '苦笑.png',
  '蜡烛.png',
  '裂开.png',
  '震惊.png',
  '高兴.png',
  '冒冷汗.png',
  '斜眼看.png',
  '眼前一亮.png',
  '让我看看.png',
];
export {rpx, useWechatEmoji};
