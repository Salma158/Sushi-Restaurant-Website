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




@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FlexLayoutModule, MatCardModule, MatCardModule, MatIconModule, MatDividerModule, MatFormFieldModule, MatSelectModule],
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
      next: (res) => this.cartItems = res,
      error: (e) => console.error(e),
    })
  }
}
