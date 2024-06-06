import {Component} from '@angular/core';
import { MenuItem } from '../../../interfaces/menu-item';
import { MenuService } from '../../../services/menu.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {
  displayedColumns: string[] = ['name', 'description', 'price'];
  dataSource! : Array<MenuItem>;

  constructor(private menuService : MenuService){}

  ngOnInit(){
 
    this.menuService.getMenuItems().subscribe({
    next: (res) => this.dataSource = res._embedded.menuItems,
    error: (e) => console.error(e),
})}
}