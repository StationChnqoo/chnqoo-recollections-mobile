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

export const NotesType = {
  TIMER: 'TIMER',
  DAILY: 'DAILY',
  MOTION: 'MOTION',
  LEARN: 'COLLECT',
};

export interface AppBottomBarModalItem {
  id: string;
  title: string;
  src: ImageRequireSource;
  checked: boolean;
}
