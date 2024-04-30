import { Component, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../interfaces/menu-item';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  menuList!: Array<MenuItem>;
  @Input() id?: number;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    if(this.id){
      this.listMenuItemsByCategory();
    } else{
      this.listMenuItems();
    }
  }

  listMenuItemsByCategory(){
    this.menuService.getMenuItemsByCategory(this.id!).subscribe({
      next: (res) => this.menuList = res._embedded.menuItems,
      error: (e) => console.error(e),
    })
  }

  listMenuItems(){
    this.menuService.getMenuItems().subscribe({
      next: (res) => this.menuList = res._embedded.menuItems,
      error: (e) => console.error(e),
    })
  }

}
