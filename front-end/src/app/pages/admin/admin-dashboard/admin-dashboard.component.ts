import { Component } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MenuItemsComponent, RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
