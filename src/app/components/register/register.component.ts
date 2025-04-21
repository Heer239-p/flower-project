import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    Password: '',
    role: ''  // Add role here (e.g., 'owner' or 'user')
  };

  constructor(private router: Router) {}

  submitForm() {
    console.log('Form Submitted:', this.contact);

    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(this.contact));

    // Set login state and role
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', this.contact.role);  // Save role separately

    alert(`Successfully signed up as ${this.contact.role}!`);

    // Redirect based on the role
    if (this.contact.role === 'owner') {
      this.router.navigate(['/owner-dashboard']);  // Navigate to Owner Dashboard if role is owner
    } else {
      this.router.navigate(['/']);  // Navigate to the homepage or another route for users
    }
  }
}
