import {RootStacksParams} from '@root/ScreenStacks';
import {ImageRequireSource, ImageURISource} from 'react-native';

export interface Player {
  id: number;
  name: string;
  /** 进贡、吃贡、出的牌 */
  handleCards: string[];
}

export interface Game {
  src: ImageRequireSource | ImageURISource;
  title: string;
  message: string;
  page: keyof RootStacksParams;
}

export const CardInputerKeyevent = {
  DELETE: 'DELETE',
  RESET: 'RESET',
  POP: 'POP',
};

export interface Todo {
  id: string;
  content: string;
  updateTime: string;
  createTime: string;
  notifyTime: string;
  isDaily: boolean;
  success: boolean;
  updateQuantity:  number;
}

export const NotesType = {
  TIMER: 'TIMER',
  DAILY: 'DAILY',
  MOTION: 'MOTION',
  LEARN: 'COLLECT',
  TODO: 'TODO',
};

export interface AppBottomBarModalItem {
  id: string;
  title: string;
  src: ImageRequireSource;
  checked: boolean;
}
