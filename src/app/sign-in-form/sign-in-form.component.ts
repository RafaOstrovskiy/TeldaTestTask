import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  submitted = false;
  hide = true;

  constructor(private userService: UserService,  private snackBar: MatSnackBar, private router: Router) {}

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    toRemember: new FormControl(true)
  });

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get toRemember() {
    return this.form.get('toRemember');
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value)
      this.userService.loginUser(this.email.value, this.password.value, this.toRemember?.value).subscribe({
        next: () => {
          this.snackBar.open('Successfully login', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom'
          })
          this.router.navigate(['/home'])
        },
        error: (e) => {
          console.error(e)
          this.snackBar.open('Incorrect email or password', 'Close', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom'
          })
        }
      })
    }
  }

  changePasswordVisibility(e: Event) {
    e.preventDefault();
    this.hide = !this.hide;
  }
}
