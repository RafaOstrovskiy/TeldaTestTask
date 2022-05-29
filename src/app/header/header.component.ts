import { Component, OnInit } from '@angular/core';
import {IUser} from "../types/user.interface";
import {Subscription} from "rxjs";
import {UserService} from "../user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser!: IUser | null ;
  currentUserSubscription!: Subscription

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUserSubscription = this.userService.getUserSubject().subscribe((user) => {
      this.currentUser = user;
    });
  }

  logOut(){
    this.userService.logout()
  }
  ngOnDestroy() {
    this.currentUserSubscription?.unsubscribe()
  }
}
