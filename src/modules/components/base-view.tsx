import React from 'react';
import {Keyboard, Pressable, PressableProps, StyleSheet} from 'react-native';

interface IBaseView {
  children: React.ReactNode;
}
const BaseView: React.FC<IBaseView & PressableProps> = ({
  children,
  ...props
}) => {
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss} {...props}>
      {children}
    </Pressable>
  );
};

export default BaseView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
