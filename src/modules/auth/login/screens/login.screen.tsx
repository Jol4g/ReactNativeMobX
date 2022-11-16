import {Button} from 'react-native';
import { BaseView, LoginForm } from '../components';
import {styles} from './login.style';
import React from 'react';
import { loginViewModel } from '../../../../view-model/auth/login.view-model';

const LoginScreen = () => {
  console.log('Login Screen');
  return (
    <BaseView style={styles.container}>
      <LoginForm />
      <Button title="register" onPress={loginViewModel.handleLogin} />
    </BaseView>
  );
};

export default LoginScreen;
