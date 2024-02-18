import AsyncStorage from '@react-native-async-storage/async-storage';
import {Todo} from '@src/constants/MyTypes';
import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';

interface States {
  bears: number;
  increase: (by: number) => void;
  theme: string;
  setTheme: (theme: string) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  mergeTodos: (todo: Todo) => void;
  deleteTodos: (todo: Todo) => void;
}

const useStore = create<States>()(
  devtools(
    persist(
      set => ({
        bears: 0,
        increase: by => set(state => ({bears: state.bears + by})),
        theme: '#a86640',
        setTheme: theme => set({theme}),
        todos: [],
        setTodos: todos => set({todos}),
        mergeTodos: todo =>
          set(state => {
            let _todos = [...state.todos];
            let index = _todos.findIndex(it => it.id == todo.id);
            if (index >= 0) {
              _todos[index] = todo;
            } else {
              _todos = [todo, ..._todos];
            }
            return {todos: _todos};
          }),
        deleteTodos: todo =>
          set(state => {
            let _todos = [...state.todos];
            let index = _todos.findIndex(it => it.id == todo.id);
            if (index >= 0) {
              _todos.splice(index, 1);
            }
            return {todos: _todos};
          }),
      }),
      {
        storage: createJSONStorage(() => AsyncStorage),
        name: 'useStore.ts',
        /** 白名单 */
        partialize: state => ({
          bears: state.bears,
          theme: state.theme,
          todos: state.todos,
        }),
      },
    ),
  ),
);

export {useStore};
