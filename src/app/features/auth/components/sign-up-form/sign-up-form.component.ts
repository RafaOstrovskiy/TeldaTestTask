import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/services/user.service";
import {passwordMatchingValidator} from "../../../../helpers/passwordMatchingValidator";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent  {
  submitted = false;
  hide = true;
  validatorsForNames = [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern('[a-zA-Z ]*')
  ];

  constructor(private userService: UserService, private snackBar: MatSnackBar) {}

  form: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\\d!@#$%^&].{7,}'
        )
      ]),
      firstName: new FormControl('', this.validatorsForNames),
      lastName: new FormControl('', this.validatorsForNames),
      confirmPassword: new FormControl(null, [Validators.required])
    },
    { validators: passwordMatchingValidator.passwordsMatching }
  );

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }

  changePasswordVisibility(e: Event) {
    e.preventDefault();
    this.hide = !this.hide;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.userService
        .createUser({
          id: this.email.value,
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          email: this.email.value,
          password: this.password.value,
        })
        .subscribe({
          next: (user) => {
            this.snackBar.open('Successfully signed up. Sign in now!', 'Close', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'bottom'
            })
            console.log(user)
          },
          error: (err) => {
            console.log(err)
            this.snackBar.open('User with passed email is already exist', 'Close', {
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'bottom'
            })
            this.form.reset();
          }
        });
    }
  }
}
