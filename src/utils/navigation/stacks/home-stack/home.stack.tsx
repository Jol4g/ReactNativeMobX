import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '@/modules';
import {HomeStackParamList} from './home.type';

const HomeStack = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group key={'Home-group'}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
