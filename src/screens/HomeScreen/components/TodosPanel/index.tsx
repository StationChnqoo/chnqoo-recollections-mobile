import {useStore} from '@root/useStore';
import {Todo} from '@src/constants/MyTypes';
import {Styles} from '@src/constants/x';
import moment from 'moment';

import React, {useState} from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import 'moment/locale/zh-cn';

interface MyProps {
  todos: Todo[];
  onTodoPress: (todo: Todo) => void;
  onItemPress: (todo: Todo) => void;
}

const TodosPanel: React.FC<MyProps> = props => {
  const {todos, onTodoPress, onItemPress} = props;
  const {theme} = useStore();

  console.log(todos.map(it => it.success));
  return (
    <View style={styles.views}>
      <Text style={{fontSize: 16, color: '#333', fontWeight: '500'}}>
        待办事项
      </Text>
      <View style={{height: 5}} />
      {todos.length == 0 ? (
        <Text style={{fontSize: 14, color: '#666'}}>
          很好，今天没有待办事项哦 ~
        </Text>
      ) : (
        todos.map((it, i) => (
          <TouchableOpacity
            key={JSON.stringify(it)}
            style={{flexDirection: 'row'}}
            activeOpacity={0.88}
            onPress={() => {
              onItemPress(it);
            }}>
            <BouncyCheckbox
              isChecked={it.success}
              fillColor={theme}
              // disabled={true}
              size={20}
              style={{}}
              onPress={() => {
                onTodoPress(it);
              }}
              // disableText={true}
              hitSlop={{top: 16, bottom: 16, left: 16, right: 16}}
            />
            <View style={{flex: 1}}>
              <View style={{height: 4}} />
              <View style={Styles.row({justifyContent: 'space-between'})}>
                <Text style={{fontSize: 14, color: '#333'}} numberOfLines={1}>
                  {`${it.isDaily ? '[每日]' : '[临时]'} → ${it.content}`}
                </Text>
                <Text
                  style={{
                    color: theme,
                    fontSize: 12,
                  }}>{`${moment(it.updateTime).fromNow()}`}</Text>
                {/* <Switch value={it.isDaily} /> */}
              </View>
              {i == todos.length - 1 ? null : <View style={styles.viewLine} />}
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    padding: 12,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  viewLine: {
    height: 1,
    marginVertical: 6,
    backgroundColor: '#eee',
    width: '100%',
  },
});

export default TodosPanel;
