import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './root.navigation';
import AuthStack from './stacks/auth-stack/auth.stack';

const MainNavigation = () => {
  console.log('MainNavigation');

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        // onLoad tree
      }}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
