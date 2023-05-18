import { autorun, IReactionDisposer, makeAutoObservable } from 'mobx';
import { IObservable } from '../types';
import { user } from '../../model';
import { navigate } from '../../utils/navigation/root.navigation';

interface ILoginViewModel {
  setUserEmail: (email: string) => void;
  getUserEmail: string;
  setUserPassword: (email: string) => void;
  getUserPassword: string;
  handleLogin: (navigation: any, routeName: string) => void;
}

class LoginViewModel implements ILoginViewModel, Partial<IObservable> {

  public message: string = ''

  disposerList: IReactionDisposer[] = [];

  constructor() {
    console.log('Create User Model View object');
    makeAutoObservable(this);
    const disposer = autorun(() => {
    });
    this.disposerList.push(disposer);
  }

  setUserEmail = (email: string) => {
    user?.setEmail(email);
  };

  get getUserEmail() {
    return user.getEmail;
  }

  setUserPassword = (password: string) => {
    user.setPassword(password);
  };

  get getUserPassword() {
    return user.getPassword;
  }

  handleLogin = () => {
    navigate('Register');
  };

  dispose = () => {
    this.disposerList?.forEach(diposer => {
      diposer?.();
    });
  };
}

export const loginViewModel = new LoginViewModel();
