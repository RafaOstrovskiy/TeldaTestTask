import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable} from "rxjs";
import {IUser} from "./types/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  userSubject: BehaviorSubject<IUser | null>;
  private  listOfUsersSubject: BehaviorSubject<IUser[]>;

  constructor() {
    this.userSubject = new BehaviorSubject<IUser | null>(this.currentUser);
    this.listOfUsersSubject = new BehaviorSubject<IUser[]>(this.getListOfUsers());
  }

  get currentUser() {
    if (localStorage.getItem('currentUser')) {
      return JSON.parse(localStorage.getItem('currentUser') as string);
    } else {
      return JSON.parse(sessionStorage.getItem('currentUser') as string);
    }
  }

  getUser() {
    return this.userSubject;
  }

  getListOfUsers(): IUser[] {
    return JSON.parse(localStorage.getItem('TeldaListOfUsers') as string)
  }

  getUserByEmail(email: string) {
    let foundUser
    const listOfUsers: IUser[] = this.getListOfUsers()
    for (let user of listOfUsers) {
      if (user.email === email) {
        foundUser = user
      }
    }
    return foundUser ? foundUser : null
  }

  createUser(user: IUser):Observable<any> {
    const obs = new Observable((sub) => {
      if (this.getUserByEmail(user.email)) {
        sub.error('User already exist')
      } else {
        const listOfUsers: IUser[] = this.getListOfUsers() || []
        listOfUsers.push(user)
        this.updateListOfUsers(listOfUsers)
        sub.next(user)
      }
    })
    return obs
  }

  updateListOfUsers(usersList: IUser[]) {
    localStorage.setItem('TeldaListOfUsers', JSON.stringify(usersList))
    this.listOfUsersSubject.next(usersList)
  }


}
