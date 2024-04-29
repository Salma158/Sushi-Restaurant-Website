import { Component } from '@angular/core';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
