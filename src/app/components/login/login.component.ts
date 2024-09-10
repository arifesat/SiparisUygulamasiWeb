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
        if (response.authToken) {
            localStorage.setItem('authToken', response.authToken);
            window.location.href = '/';
            console.log('AuthToken stored:', response.authToken);
        } else {
            console.error('AuthToken is empty');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  logoutUser(): void {
    this.apiService.logoutUser().subscribe({
      next: response => {
        console.log('Logout successful:', response);
        // Handle logout, like clearing stored auth token
      },
      error: error => {
        console.error('Logout failed:', error);
      }
  });
  }
}
