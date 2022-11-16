import {autorun, IReactionDisposer, makeAutoObservable} from 'mobx';
import {IObservable} from '../types';
import {User} from '../../model';
import {navigate, navigationRef} from '../../utils/navigation/root.navigation';
import { AuthStackParamList, LoginScreenNavigationProp } from '../../utils/navigation/stacks/auth-stack/auth.stack';

interface ILogin {
  setUserEmail: (email: string) => void;
  getUserEmail: string;
  setUserPassword: (email: string) => void;
  getUserPassword: string;
  handleLogin: (navigation: any, routeName: string) => void;
}

class LoginViewModel implements ILogin, Partial<IObservable> {
  private userModel: User;

  disposerList: IReactionDisposer[] = [];

  constructor() {
    this.userModel = new User();
    console.log('Create User Model View object');
    makeAutoObservable(this);

    const disposer = autorun(() => {
      console.log(this.userModel);
    });
    this.disposerList.push(disposer);
  }

  setUserEmail = (email: string) => {
    this.userModel?.setEmail(email);
  };

  get getUserEmail() {
    return this.userModel.getEmail;
  }

  setUserPassword = (password: string) => {
    this.userModel.setPassword(password);
  };

  get getUserPassword() {
    return this.userModel.getPassword;
  }

  handleLogin = () => {
    navigate<LoginScreenNavigationProp>('',{x:'fedi'});
  };

  dispose = () => {
    this.disposerList?.forEach(diposer => {
      diposer?.();
    });
  };
}

export const loginViewModel = new LoginViewModel();
