import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';

interface States {
  bears: number;
  increase: (by: number) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const useStore = create<States>()(
  devtools(
    persist(
      set => ({
        bears: 0,
        increase: by => set(state => ({bears: state.bears + by})),
        theme: '#a86640',
        setTheme: theme => set({theme}),
      }),
      {
        storage: createJSONStorage(() => AsyncStorage),
        name: 'useStore.ts',
        /** 白名单 */
        partialize: state => ({
          bears: state.bears,
          theme: state.theme,
        }),
      },
    ),
  ),
);

export {useStore};
