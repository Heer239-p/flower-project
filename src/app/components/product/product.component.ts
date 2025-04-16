import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';  // Correct import for Router

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Include RouterModule for routing
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  // Corrected styleUrl to styleUrls
})
export class ProductComponent {
  products = [
    {
      name: 'Flower Pot',
      price: 15.99,
      oldPrice: 18.99,
      discount: -10,
      image: 'https://cdn.shopify.com/s/files/1/0507/3754/5401/files/YPBD_LOL_preset_ftd-mx-tile-wide-lv-new.jpg?v=1738963039&width=1920',
      showAddToCart: false
    },
    {
      name: 'Flower Pot',
      price: 15.99,
      oldPrice: 18.99,
      discount: -15,
      image: 'https://www.floristbury.co.uk/Image.aspx?websiteid=1185&filename=product/1868030993large.jpg&newheight=384&newWidth=384&ver=20&cache=1',
      showAddToCart: false
    },
    {
      name: 'Flower Pot',
      price: 15.99,
      oldPrice: 18.99,
      discount: -5,
      image: 'https://dingdongg.com/wp-content/uploads/2023/02/46-1.jpg',
      showAddToCart: false
    },
    {
      name: 'Flower Pot',
      price: 15.99,
      oldPrice: 18.99,
      discount: -5,
      image: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/161776sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&auto=webp',
      showAddToCart: false
    },
    {
      name: 'Flower Pot',
      price: 15.99,
      oldPrice: 18.99,
      discount: -5,
      image: 'https://assets.eflorist.com/assets/products/PZM_/TLR07-1B.jpg?impolicy=hero&impolicy=hero',
      showAddToCart: false
    },
    {
      name: 'Flower Pot',
      price: 15.99,
      oldPrice: 18.99,
      discount: -5,
      image: 'https://urbanstems.com/cdn/shop/files/RoseGarden_MainImage_PDP_1.jpg?v=1742492084&width=1000',
      showAddToCart: false
    }
  ];

  constructor(private router: Router) {}

  toggleAddToCart(product: any): void {
    product.showAddToCart = !product.showAddToCart;
  }

  addToCart(product: any): void {
    console.log('Added to cart:', product.name);
    product.showAddToCart = false; // Optional: hide after adding
    this.router.navigate(['payment']);  // Redirect to payment page
  }
}
