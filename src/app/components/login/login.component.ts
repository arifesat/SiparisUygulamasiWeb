import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class LoginComponent {
  credentials = { email: '', username: '', password: '' };

  constructor(private apiService: ApiService) {}

  loginUser(): void {
    this.apiService.loginUser(this.credentials).subscribe(
      response => {
        console.log('Login successful:', response);
        // Handle login success, like storing the auth token and redirecting
      },
      error => {
        console.error('Login failed:', error);
      }
    );
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
