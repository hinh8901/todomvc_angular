import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formData!: FormGroup;
  errorMessage: string = '';
  loadingIcon = faSpinner;
  isLoading: boolean = false;

  constructor(private authService: AuthenticationService) {
    this.loginSuccess = this.loginSuccess.bind(this);
    this.loginFailed = this.loginFailed.bind(this);
    this.onFocusInput = this.onFocusInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl(
        '',
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      password: new FormControl('', Validators.required),
    });
  }

  loginSuccess(successRes: any) {
    console.log('flow: res', successRes);
    this.isLoading = false;
  }

  loginFailed(failRes: any) {
    this.errorMessage = failRes?.error?.message;
    this.isLoading = false;
  }

  onLogin() {
    this.isLoading = true;
    this.errorMessage = '';
    console.log('flow: formData', this.formData);
    this.authService
      .login(this.formData.value)
      .subscribe(this.loginSuccess, this.loginFailed);
  }

  onFocusInput(event: Event) {
    this.errorMessage = '';
  }
}
