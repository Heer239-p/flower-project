import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    Password: ''
  };

  // ✅ Inject Router here
  constructor(private router: Router) {}

 
    submitForm() {
      console.log('Form Submitted:', this.contact);
      alert('Successfully signed up!');
      this.router.navigate(['/']); // or wherever you want
    }
    
  }

 

