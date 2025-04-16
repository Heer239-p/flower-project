import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    const storedData = localStorage.getItem('userData');
    
    if (storedData) {
      const user = JSON.parse(storedData);

      // Validate credentials
      if (this.username === user.name && this.password === user.Password) {
        console.log('Login Successful');
        this.loginFailed = false;

        // Set login state to true
        localStorage.setItem('isLoggedIn', 'true');

        this.router.navigate(['/']); // Navigate to home or dashboard
      } else {
        this.loginFailed = true;
        console.log('Invalid login');
      }
    } else {
      this.loginFailed = true;
      console.log('No user found. Please register first.');
    }
  }
  onRegister() {
  this.router.navigate(['/register']);
}

}
