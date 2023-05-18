import { makeAutoObservable } from "mobx";

export class todo {
    userId = 0
    id = 0
    title = ''
    completed = false
    
    constructor() {
        makeAutoObservable(this);
      }   
}