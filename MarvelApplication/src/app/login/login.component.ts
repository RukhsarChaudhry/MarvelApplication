import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../shared/services/UserService/user.service';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'angular5-social-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  constructor(private socialAuthService: AuthService,
    private fb: FormBuilder
  ) {
    this.register();
  }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...

      }
    );
  }
  formErrors = {
    'first_name': '',
    'last_name': '',
    'email': '',
    'password': ''
  }
  validationMessages = {
    'first_name': { 'required': 'Field is required.', },
    'last_name': { 'required': 'Field is required.', },
    'email': { 'required': 'Field is required.', },
    'password': { 'required': 'Field is required.', }
  }
  register() {
    this.submitted = false;
    this.registerForm = this.fb.group({
      first_name: [, [<any>Validators.required]],
      last_name: [, [<any>Validators.required]],
      email: [, [<any>Validators.required]],
      password: [, [<any>Validators.required]]
    })
    this.registerForm.valueChanges.subscribe(data => this.onValueChanges());
  }
  onValueChanges() {
    //console.log(this.resForm);
    if (!this.registerForm) { return; }
    const form = this.registerForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (control.dirty || this.submitted) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (this.formErrors[field].length < 1) {

            this.formErrors[field] += messages[key];
          }
        }
      }
    }
  }

  registerUser(value: any, valid: boolean) {
    console.log(value);
    this.submitted = true;
    if (valid == false) {
      return;
    }
    // this.userService.RegisterUser(value).subscribe(data => {

    // })

  }

}
