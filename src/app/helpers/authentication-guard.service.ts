import {Injectable, OnDestroy} from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {UserService} from "../core/services/user.service";
import {IUser} from "../types/user.interface";
import {Subscription} from "rxjs";




@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate, OnDestroy {
  currentUser!: IUser | null ;
  currentUserSubscription!: Subscription

  constructor( private router: Router, private userService: UserService) {}

  canActivate() {
    this.currentUserSubscription = this.userService.getUserSubject().subscribe((user) => {
      this.currentUser = user;
    });
    if (!this.currentUser) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe()
  }
}
