import React from 'react';
import {observer} from 'mobx-react';
import {TextInput, Text} from 'react-native';
import {loginViewModel} from '../../../../../view-model/auth/login.view-model';

const LoginForm = observer(() => {
  console.log('render Login Form');
  return (
    <>
      <Text>Email: </Text>
      <TextInput
        placeholder="Email"
        value={loginViewModel.getUserEmail}
        onChangeText={loginViewModel.setUserEmail}
      />
      <Text>Password: </Text>
      <TextInput
        placeholder="Password"
        value={loginViewModel.getUserPassword}
        onChangeText={loginViewModel.setUserPassword}
      />
    </>
  );
});

export default LoginForm;
