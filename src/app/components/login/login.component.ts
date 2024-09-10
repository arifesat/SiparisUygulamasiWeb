import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  loginUser(): void {
    this.authService.login(this.credentials.username, this.credentials.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Handle login success, like storing the auth token and redirecting
        localStorage.setItem('authToken', response.AuthToken);
        window.location.href = '/home';
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  logoutUser(): void {
    this.apiService.logoutUser().subscribe(
      response => {
        console.log('Logout successful:', response);
        // Handle logout, like clearing stored auth token
      },
      error => {
        console.error('Logout failed:', error);
      }
    );
  }
}
