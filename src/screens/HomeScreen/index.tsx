import {RouteProp, useFocusEffect} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/ScreenStacks';

import {BeautyTitleBar, TodoEditorModal} from '@src/components';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {SearchBar, TodosPanel} from './components';
import {useStore} from '@root/useStore';
import moment from 'moment';
import {Todo} from '@src/constants/MyTypes';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'DemoScreen'>;
}

const HomeScreen: React.FC<MyProps> = props => {
  const {navigation} = props;
  const {theme, todos, setTodos, mergeTodos, deleteTodos} = useStore();
  const [todoModal, setTodoModal] = useState(false);
  const [todo, setTodo] = useState<Todo>(null);

  useEffect(() => {
    let _todos = [...todos];
    for (let i = 0; i < _todos.length; i++) {
      let todo = _todos[i];
      if (
        todo.isDaily &&
        moment(todo.updateTime).format('YYYY-MM-DD') !=
          moment().format('YYYY-MM-DD')
      ) {
        todo.success = false;
        todo.updateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        todo.updateQuantity = todo.updateQuantity + 1;
      }
    }
    setTodos(_todos);
    return function () {};
  }, []);

  const onTodoPress = (todo: Todo) => {
    Alert.alert('提示', '确认修改待办事项状态？', [
      {
        text: '确认',
        onPress: () => {
          mergeTodos({...todo, ...{success: !todo.success}});
        },
      },
      {text: '取消', onPress: () => {}},
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <BeautyTitleBar>
        <SearchBar />
      </BeautyTitleBar>
      <ScrollView>
        <View style={{height: 12}} />
        <TodosPanel
          todos={todos}
          onTodoPress={onTodoPress}
          onItemPress={todo => {
            setTodo(todo);
            setTodoModal(true);
          }}
        />
      </ScrollView>
      <TodoEditorModal
        item={todo}
        isVisible={todoModal}
        onClose={() => {
          setTodoModal(false);
        }}
        onHide={() => {
          setTodoModal(false);
        }}
        onShow={() => {}}
        onSubmit={item => {
          mergeTodos(item);
          setTodoModal(false);
        }}
        onDeletePress={item => {
          deleteTodos(item);
          setTodoModal(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewCard: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  textTitle: {
    fontSize: 16,
    color: '#333',
  },
  viewGroupTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default HomeScreen;
