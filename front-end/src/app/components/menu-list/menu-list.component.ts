import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {

  menuList! : Array<MenuItem>;

  constructor(private menuService : MenuService){}

  ngOnInit(){
 
    this.menuService.getMenuItems().subscribe({
    next: (res) => this.menuList = res._embedded.menuItems,
    error: (e) => console.error(e),
})}

}
