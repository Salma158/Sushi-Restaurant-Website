import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.scss'
})
export class CartStatusComponent {
  cartItemCount: number = 5; 
}
