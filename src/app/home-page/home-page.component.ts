import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";

let user = {
  id: '1',
  firstName: 'Bulat',
  lastName: 'Asad',
  email: 'Bul@sss.com',
  password: 'Qwerty123!'
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


  createUser() {
    this.userService.createUser(user)
    console.log(this.userService.getUserByEmail('Bul@sss.com'));
  }

  logObs(): Observable<any> {
    const obs = new Observable((sub) => {
      sub.next(1);

      setTimeout(() => {
        sub.next(3);
        sub.complete();
      }, 500);
    });

    return obs
  }

  newLog() {
    let obs = this.logObs()
    obs.subscribe((vl) => console.log(vl));
  }
}
