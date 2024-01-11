import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly authUrl = 'https://dummyjson.com/auth/login';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }): Observable<object> {
    return this.http.post(this.authUrl, data, this.httpOptions);
  }
}
