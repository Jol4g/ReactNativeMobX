import { makeAutoObservable } from "mobx";

export class User {
   email = '';
   password = '';
   age=18

  constructor() {
    console.log('Create User object');
    makeAutoObservable(this);
  }

  setEmail(email: string): void {
    this.email = email;
  }

  get getEmail(): string {
    return this.email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  get getPassword(): string {
    return this.password;
  }
  
}
