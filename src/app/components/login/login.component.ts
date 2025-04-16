import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router to handle navigation

@Component({
  selector: 'app-login',
  imports : [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  isLoading: boolean = false;

  // Inject the Router service into the constructor
  constructor(private router: Router) {}

  // This method is triggered when the login form is submitted
  onSubmit() {
    // Example login logic (replace this with actual login logic)
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Login Successful');
      this.router.navigate(['']);  // Navigate to dashboard on successful login
    } else {
      this.loginFailed = true;
      console.log('Invalid login');
    }
  }

  // This method is triggered when the user clicks the "Register" button
  onRegister() {
    // Navigate to the 'register' route (assuming it's set up)
    this.router.navigate(['/register']);
  }
}
