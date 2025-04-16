import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    Password: ''
  };

  constructor(private router: Router) {}

  submitForm() {
    console.log('Form Submitted:', this.contact);

    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(this.contact));

    // Set login state to true
    localStorage.setItem('isLoggedIn', 'true');

    alert('Successfully signed up!');
    this.router.navigate(['/']); // Navigate to the homepage or desired route
  }
}
