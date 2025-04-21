import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent {
  product = {
    name: '',
    price: '',
    oldPrice: '',
    discount: '',
    image: ''
  };

  successMessage = '';

  constructor(private router: Router) {}

  addProduct(): void {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(this.product);
    localStorage.setItem('products', JSON.stringify(products));

    // Show success message
    this.successMessage = '✅ Product uploaded successfully!';

    // Clear form
    this.product = {
      name: '',
      price: '',
      oldPrice: '',
      discount: '',
      image: ''
    };

    // Optional: Auto-hide message after 3 seconds
    setTimeout(() => {
      this.successMessage = '';
      this.router.navigate(['/products']); // Navigate after message (optional)
    }, 2000);
  }
}
