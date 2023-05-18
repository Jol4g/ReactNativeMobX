import React from 'react';
import {Button} from 'react-native';

import {loginViewModel} from '../../../../view-model/auth/login.view-model';
import {BaseView} from '../../../../modules/components';
import {LoginForm} from '../components';

import {styles} from './login.style';

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
