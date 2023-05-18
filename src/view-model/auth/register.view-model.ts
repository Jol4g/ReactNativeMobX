import { autorun, IReactionDisposer, makeAutoObservable } from 'mobx';
import { IObservable } from '../types';
import { user } from '../../model';
import { navigate } from '../../utils/navigation/root.navigation';
import { NavigationRoutes } from '../../utils';

interface IRegister {
  setUserEmail: (email: string) => void;
  getUserEmail: string;
  setUserPassword: (email: string) => void;
  getUserPassword: string;
}

class RegisterViewModel implements IRegister, Partial<IObservable> {


  disposerList: IReactionDisposer[] = [];

  constructor() {

    makeAutoObservable(this);

    const disposer = autorun(() => {
      console.log(user);
    });
    this.disposerList.push(disposer);
  }

  // email
  setUserEmail = (email: string) => {
    user?.setEmail(email);
  };

  get getUserEmail() {
    return user.getEmail;
  }

  // password
  setUserPassword = (password: string) => {
    user.setPassword(password);
  };

  get getUserPassword() {
    return user.getPassword;
  }

  // firstname
  setUserFirstname = (firstname: string) => {
    user.setFirstname(firstname);
  };

  get getUserFirstname() {
    return user.firstname;
  }
  
  // lastname
  setUserLastname = (lastname: string) => {
    user.setLastname(lastname);
  };

  get getUserLastname() {
    return user.lastname;
  }

  handleRegister = () => {
    navigate<NavigationRoutes>('Login');
  };

  dispose = () => {
    this.disposerList?.forEach(diposer => {
      diposer?.();
    });
  };
}

export const registerViewModel = new RegisterViewModel();
