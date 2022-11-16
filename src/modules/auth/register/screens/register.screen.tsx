import React from 'react';
import {registerViewModel} from '../../../../view-model';
import {Button, Text} from 'react-native';
import {styles} from './register.style';
import {BaseView} from '../../../components';

const RegisterScreen = () => {
  return (
    <BaseView style={styles.container}>
      <Text>Register</Text>

      <Button title="Login" onPress={registerViewModel.handleRegister} />
    </BaseView>
  );
};

export default RegisterScreen;
