import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {Subscription} from "rxjs";
import {IUser} from "../../types/user.interface";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  currentUser!: IUser | null ;
  listOfUsers!: IUser[] | []
  currentUserSubscription!: Subscription
  listOfUsersSubscription!: Subscription
  columns = [
    {
      columnDef: 'email',
      header: 'Email',
      cell: (user: IUser) => `${user.email}`,
    },
    {
      columnDef: 'firstName',
      header: 'First Name',
      cell: (user: IUser) => `${user.firstName}`,
    },
    {
      columnDef: 'lastName',
      header: 'Last Name',
      cell: (user: IUser) => `${user.lastName}`,
    }
  ];
  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUserSubscription = this.userService.getUserSubject().subscribe((user) => {
      this.currentUser = user;
    });
    this.listOfUsersSubscription = this.userService.getListOfUsersSubject().subscribe((list) => {
      this.listOfUsers = list
    })
  }

  ngOnDestroy() {
    this.currentUserSubscription?.unsubscribe()
    this.listOfUsersSubscription!.unsubscribe()
  }
}
