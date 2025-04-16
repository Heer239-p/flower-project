import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  cart = [
    {
      name: 'Rose Bouquet',
      price: 50,
      image: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/files/YPBD_LOL_preset_ftd-mx-tile-wide-lv-new.jpg?v=1738963039&width=1920'
    },
    {
      name: 'Sunflower Basket',
      price: 150,
      image: 'https://dingdongg.com/wp-content/uploads/2023/02/46-1.jpg'
    }
  ];

  removeFromCart(item: any): void {
    this.cart = this.cart.filter(p => p !== item);
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}

