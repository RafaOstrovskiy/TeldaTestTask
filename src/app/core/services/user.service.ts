import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "../../types/user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  userSubject: BehaviorSubject<IUser | null>;
  private  listOfUsersSubject: BehaviorSubject<IUser[]>;

  constructor(private router: Router) {
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

  getUserSubject() {
    return this.userSubject;
  }
  getListOfUsersSubject() {
    return this.listOfUsersSubject
  }

  getListOfUsers(): IUser[] {
    return JSON.parse(localStorage.getItem('TeldaListOfUsers') as string)
  }

  getUserByEmail(email: string) {
    let foundUser
    const listOfUsers: IUser[] = this.getListOfUsers() || []
    for (let user of listOfUsers) {
      if (user.email === email) {
        foundUser = user
      }
    }
    return foundUser ? foundUser : null
  }

  createUser(user: IUser):Observable<any> {
    return new Observable((sub) => {
      if (this.getUserByEmail(user.email)) {
        sub.error('User already exist')
      } else {
        const listOfUsers: IUser[] = this.getListOfUsers() || []
        listOfUsers.push(user)
        this.updateListOfUsers(listOfUsers)
        sub.next(user)
      }
    })
  }

  loginUser(email: string, password: string, toRemember: boolean):Observable<any> {
    return new Observable((sub) => {
      const user = this.getUserByEmail(email)
      if (!user || user.password !== password) {
        sub.error('Incorrect email or password')
      } else {

        toRemember
          ? localStorage.setItem('currentUser', JSON.stringify(user))
          : sessionStorage.setItem('currentUser', JSON.stringify(user))

        this.userSubject.next(user)
        sub.next(user)
      }
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.userSubject.next(null);
    this.router.navigate(['home']);
  }

  updateListOfUsers(usersList: IUser[]) {
    localStorage.setItem('TeldaListOfUsers', JSON.stringify(usersList))
    this.listOfUsersSubject.next(usersList)
  }


}
