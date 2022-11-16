import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../../../../modules';
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


export type AuthStackParamList = {
    Login: { userId: string };
    Register: undefined
  };

  type Props = NativeStackScreenProps<AuthStackParamList>;

  export type LoginScreenNavigationProp = Props['navigation'];

  export type LoginScreenRouteProp = Props['route'];