// RootNavigation.js

import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export function navigate<T>(name: T, params?: any) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    // @ts-ignore
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export const getParams = navigationRef.getCurrentRoute()?.params;
