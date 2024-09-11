import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/LoginRequest.model';
import { LoginResponse } from '../models/LoginResponse.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7013/api/user/login';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(Username: string, Password: string): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body: LoginRequest = { Username, Password };

    return this.http.post<LoginResponse>(this.apiUrl, body, { headers });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserId(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      console.log(decodedToken);
      return decodedToken.userId; // Assuming the token has an 'id' claim
    } catch (error) {
      console.error('Failed to decode token', error);
      return null;
    }
  }
}