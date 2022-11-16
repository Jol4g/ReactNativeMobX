/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { LoginScreen } from '../screens';

it('renders Login screen correctly', () => {
  renderer.create(<LoginScreen />);
});
