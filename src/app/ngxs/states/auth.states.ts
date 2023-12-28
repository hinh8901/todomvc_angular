import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";

import { AuthStateModel } from "../models/auth.models";
import { Auth } from "../actions/auth.actions";

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    username: "username.test",
    token: "token.test"
  }
})
@Injectable()
export class AuthState {
  @Action(Auth.Login)
  login(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState()
    ctx.setState({
      ...state,
      username: 'test',
      token: 'test'
    })
  }
}