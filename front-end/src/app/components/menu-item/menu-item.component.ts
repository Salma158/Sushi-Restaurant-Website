import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MenuItem } from '../../interfaces/menu-item';
@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() item! : MenuItem; 
}
