import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../interfaces/menu-item';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../interfaces/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, RouterLink, MatInputModule, MatButtonModule, FlexLayoutModule, MatCardModule, MatCardModule, MatIconModule, MatDividerModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems!: Array<CartItem>;
  totalPrice!: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe({
      next: (res) => {
        this.cartItems = res.cartItems
        this.totalPrice = res.totalPrice
        console.log(res)
      },
      error: (e) => console.error(e),
    })
  }

  inc(cartItem: CartItem) {
    this.cartService.addToCart(cartItem.menuItem).subscribe({
      next: (res) => {
        console.log(res);
        cartItem.quantity++;
        this.calculateTotalPrice();
      },
      error: (e) => console.error(e),

    })
  }

  dec(cartItem: CartItem, quantity: number) {
    this.cartService.removeFromCart(cartItem.menuItem, quantity).subscribe({
      next: (res) => {
        console.log(res);
        if (quantity <= 1) {
          this.cartItems = this.cartItems.filter(c => c !== cartItem);
        } else {
          cartItem.quantity--;
        }
        this.calculateTotalPrice();
      },
      error: (e) => console.error(e),
    })
  }
  remove(cartItem: CartItem, quantity: number) {
    this.cartService.removeFromCart(cartItem.menuItem, quantity).subscribe({
      next: (res) => {
        this.cartItems = this.cartItems.filter(c => c !== cartItem);
        this.calculateTotalPrice();
      },
      error: (e) => console.error(e),
    })
  }
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, cartItem) => {
      return total + cartItem.menuItem.price * cartItem.quantity;
    }, 0);
  }
}
