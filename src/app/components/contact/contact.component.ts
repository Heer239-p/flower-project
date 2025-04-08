import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // Corrected from styleUrl to styleUrls
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    console.log('Form Submitted:', this.contact);
    alert('Message sent successfully!');
  }
}
