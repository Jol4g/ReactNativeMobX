import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './auth.type';
import {LoginScreen, RegisterScreen} from '@/modules';

const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group key={'Auth'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
