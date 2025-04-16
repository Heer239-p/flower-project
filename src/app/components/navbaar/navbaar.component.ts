import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbaar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.css']
})
export class NavbaarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();  // Check login status when component initializes
  }

  // Check if user is logged in
  checkLoginStatus() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      this.isLoggedIn = true;
      this.userName = user.name; // Store the user's name
    } else {
      this.isLoggedIn = false;
    }
  }

  // Logout logic: set user as logged-out but do not remove data from localStorage
  logout(event: Event) {
    event.preventDefault();
    this.isLoggedIn = false;  // Set logged-out state
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
