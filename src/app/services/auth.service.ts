import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/LoginRequest.model';
import { LoginResponse } from '../models/LoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7013/api/user/login';

  constructor(private http: HttpClient) {}

  login(Username: string, Password: string): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body: LoginRequest = { Username, Password };

    return this.http.post<LoginResponse>(this.apiUrl, body, { headers });
  }
}