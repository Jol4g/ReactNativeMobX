import { makeAutoObservable } from 'mobx';

export class User {
  email = '';
  password = '';
  firstname = '';
  lastname = '';

  constructor() {
    console.log('Create User object');
    makeAutoObservable(this);
  }

  // setter & getter: email
  setEmail(email: string): void {
    this.email = email;
  }

  get getEmail(): string {
    return this.email;
  }

  // setter & getter: password
  setPassword(password: string): void {
    this.password = password;
  }

  get getPassword(): string {
    return this.password;
  }

  // setter & getter: firstname
  setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  get getFirstname(): string {
    return this.firstname;
  }

  // setter & getter: firstname
  setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  get getLastname(): string {
    return this.lastname;
  }
}

const user = new User()
export default user;