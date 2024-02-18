import {useStore} from '@root/useStore';
import {Todo} from '@src/constants/MyTypes';
import {Styles, rpx} from '@src/constants/x';
import moment from 'moment';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MessageBox from '../MessageBox';
import Button from '../Button';

interface MyProps {
  isVisible: boolean;
  onHide: () => void;
  onShow: () => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  item?: Todo;
  onSubmit: (todo: Todo) => void;
  onDeletePress: (todo: Todo) => void;
}

const TodoEditorModal: React.FC<MyProps> = props => {
  const {item, onSubmit, onDeletePress} = props;
  const {theme} = useStore();
  const [todo, setTodo] = useState<Todo>(null);

  const updateTodo = (key: string, value: any) => {
    let _todo = {...todo};
    _todo[key] = value;
    console.log('updateTodo: ', {key, value});
    setTodo(_todo);
  };

  return (
    <MessageBox
      {...props}
      disableBackdropPress={true}
      hideModalContentWhileAnimating={true}
      onShow={() => {
        setTodo({
          ...{
            id: Math.random().toString().replace('0.', ''),
            isDaily: false,
            notifyTime: moment().format('YYYY-MM-DD HH:mm:ss'),
            createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
            updateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
            success: false,
            updateQuantity: 0,
            content: '',
          },
          ...item,
        });
      }}
      onHide={() => {
        setTodo(null);
      }}>
      <Text style={{fontSize: rpx(20), color: '#333', fontWeight: '500'}}>
        编辑待办事项
      </Text>
      <View style={{height: 16}} />
      <View style={Styles.row({justifyContent: 'space-between'})}>
        <BouncyCheckbox
          isChecked={todo?.success}
          onPress={() => {
            updateTodo('success', !todo?.success);
          }}
          fillColor={theme}
          size={20}
          style={{}}
          // disableText={true}
          hitSlop={{top: 16, bottom: 16, left: 16, right: 16}}
        />
        <View style={{flex: 1, position: 'relative'}}>
          <TextInput
            style={styles.inputerTitle}
            placeholder={'请填写待办事项'}
            numberOfLines={1}
            value={todo?.content}
            onChangeText={t => {
              updateTodo('content', t);
            }}
          />
          <View style={styles.viewInputUnderline} />
        </View>
      </View>
      <View style={{height: 16}} />
      <View style={Styles.row({justifyContent: 'space-between'})}>
        <Text style={{color: '#333', fontSize: 16}}>每天提醒</Text>
        <Switch
          value={todo?.isDaily}
          thumbColor={theme}
          onChange={e => {
            updateTodo('isDaily', !todo?.isDaily);
          }}
        />
      </View>
      <View style={{height: 24}} />
      <View style={Styles.row({justifyContent: 'space-between'})}>
        <Button
          title={'确认'}
          onPress={() => {
            onSubmit(todo);
          }}
          style={{height: rpx(32), flex: 1}}
          disable={todo?.content ? false : true}
        />
        <View style={{width: 16}} />
        <TouchableOpacity
          onPress={() => {
            onDeletePress(todo);
          }}
          hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}
          style={[styles.buttonDelete, {borderColor: theme}]}
          activeOpacity={0.618}>
          <Image
            source={require('@src/assets/main/todo_modal_delete.png')}
            style={{height: rpx(20), width: rpx(20), tintColor: theme}}
          />
        </TouchableOpacity>
      </View>
      <View style={{height: 16}} />
    </MessageBox>
  );
};

const styles = StyleSheet.create({
  views: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    margin: 0,
    justifyContent: 'flex-end',
  },
  viewItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (Dimensions.get('screen').width - 64) / 5,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 12,
  },
  inputerTitle: {
    color: '#333',
    fontWeight: '500',
    fontSize: 16,
    padding: 0,
    paddingVertical: 0,
    flex: 1,
  },
  viewInputUnderline: {
    height: 1,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: -4,
    width: '100%',
  },
  buttonDelete: {
    height: rpx(32),
    width: rpx(32),
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default TodoEditorModal;
