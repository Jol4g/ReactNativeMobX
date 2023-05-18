import React from 'react';
import { observer } from 'mobx-react';
import { TextInput, Text } from 'react-native';
import { registerViewModel } from '../../../../../view-model';

const RegisterForm = observer(() => {
  console.log('render Register Form');
  return (
    <>
    <LabledInput
      label={'Email'}
      value={registerViewModel.getUserEmail}
      onChangeText={registerViewModel.setUserEmail}
    />
    <LabledInput
      label={'Password'}
      value={registerViewModel.getUserPassword}
      onChangeText={registerViewModel.setUserPassword}
    />
    <LabledInput
      label={'Firstname'}
      value={registerViewModel.getUserFirstname}
      onChangeText={registerViewModel.setUserFirstname}
    />
    <LabledInput
      label={'Lastname'}
      value={registerViewModel.getUserLastname}
      onChangeText={registerViewModel.setUserLastname}
    />
    </>
  );
});

const LabledInput = ({ label='', value='', onChangeText }) => {
  return <>
    <Text>{`${label}:`} </Text>
    <TextInput
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
    />
  </>
}
export default RegisterForm;
