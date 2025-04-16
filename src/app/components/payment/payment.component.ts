import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cart: any[] = [];

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cartItems');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  removeFromCart(item: any): void {
    this.cart = this.cart.filter(p => p.image !== item.image);
    localStorage.setItem('cartItems', JSON.stringify(this.cart)); // update localStorage
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
  checkout() {
    localStorage.removeItem('cartItems');
    this.cart = [];
    alert('Order placed successfully!');
  }
  
}
