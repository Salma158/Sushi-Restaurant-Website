import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-address',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent {
  shippingAddress: any = {
    fullName: '',
    city: '',
    streetAddress: '',
    building: '',
    apartmentNumber: '',
    floor: '',
    phoneNumber: ''
  };

  constructor(private orderService: OrderService, private router: Router) {}

  onSubmit() {
    console.log(this.shippingAddress);
    this.orderService.placeOrder(this.shippingAddress).subscribe(
      response => {
        console.log('Order placed successfully:', response);
        this.router.navigate(['/confirmation-page']);
      },
      error => {
        console.error('Error placing order:', error);
      }
    );
  }
}
