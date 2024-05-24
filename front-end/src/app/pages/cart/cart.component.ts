import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems!: Array<any>;

  constructor(private cartService : CartService){}

  ngOnInit(){
    this.getCartItems();
  }

  getCartItems(){
    this.cartService.getCartItems().subscribe({
      next: (res) => this.cartItems = res._embedded.cartItems,
      error: (e) => console.error(e),
    })
  }
}
