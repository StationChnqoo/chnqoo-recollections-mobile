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

const Colors = {
  page: '#f5f5f5',
  theme: [
    {name: 'Brown', value: '棕褐', dark: '#a86640', light: '#f0e1dc'},
    {name: 'Red', value: '嫣红', dark: '#e74b44', light: '#fcdcdd'},
    {name: 'Orange', value: '橘橙', dark: '#f57c1f', light: '#fee7d5'},
    {name: 'Yellow', value: '明黄', dark: '#fdbc0a', light: '#fff3d1'},
    {name: 'Olive', value: '橄榄', dark: '#8ec541', light: '#fcf4db'},
    {name: 'Green', value: '森绿', dark: '#3ab54b', light: '#d9f0df'},
    {name: 'Cyan', value: '天青', dark: '#1ebcb6', light: '#d4f2f4'},
    {name: 'Blue', value: '海蓝', dark: '#0282ff', light: '#cfe7ff'},
    {name: 'Purple', value: '姹紫', dark: '#6938b9', light: '#e2d7f3'},
    {name: 'Mauve', value: '木槿', dark: '#9e28b2', light: '#edd4f2'},
    {name: 'Pink', value: '桃粉', dark: '#e2399a', light: '#fcd7ec'},
    {name: 'Grey', value: '玄灰', dark: '#8899a7', light: '#eaebf1'},
  ],
};

/**
 * 手机验证正则表达式
 * @param mobile
 * @returns
 */
const isMobile = (mobile: string) => {
  return /^1[3-9]\d{9}$/.test(mobile);
};

export {rpx, useWechatEmoji, Colors, isMobile};
