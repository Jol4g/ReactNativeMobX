import React, { useEffect } from 'react';
import { registerViewModel } from '../../../../view-model';
import { BaseView } from '../../../../modules/components';
import { Button, Text } from 'react-native';
import { styles } from './register.style';
import { RegisterForm } from '../components';
import todoViewModel from '../../../../view-model/todo/todo.view-model';
import { FlatList } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';

const RegisterScreen = () => {
  useEffect(() => {
    todoViewModel.fetchTodoData()
  }, [])

  return (
    <BaseView style={styles.container}>
      <Text>Register</Text>
      <TodoList />
      <Button title="Login" onPress={registerViewModel.handleRegister} />
    </BaseView>
  );
};

const TodoList = observer(() => {
  console.log('render Register Form');
  return (
    <>
      {todoViewModel.list.map((o) => {
        return <Text>{o.title}</Text>
      })}
    </>
  );
});

export default RegisterScreen;
