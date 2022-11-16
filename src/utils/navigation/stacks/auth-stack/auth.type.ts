export type AuthStackParamList = {
  Login: {userId: string};
  Register: undefined;
};

export type AuthRoutes = 'Login' | 'Register';
