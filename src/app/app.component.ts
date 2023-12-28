import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AuthState } from './ngxs/states/auth.states';
import { AuthStateModel } from './ngxs/models/auth.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Todo MVC"
  @Select(AuthState) auth$!: Observable<AuthStateModel>

  ngOnInit() {
    this.auth$.subscribe((state: any) => {
      console.log("flow: ", state)
    })
  }
}
