import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formData!: FormGroup;

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl("admin"),
      password: new FormControl("1234234")
    })
  }

  onLogin() {
    console.log("flow: data", this.formData)
  }
}
