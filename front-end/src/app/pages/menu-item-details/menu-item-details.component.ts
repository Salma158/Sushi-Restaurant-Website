import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../interfaces/menu-item';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-menu-item-details',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, FlexLayoutModule],
  templateUrl: './menu-item-details.component.html',
  styleUrl: './menu-item-details.component.scss'
})
export class MenuItemDetailsComponent {
  menuItemId!: string;
  menuItem?: MenuItem;
  menuItemCategory? : Category
  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.menuItemId = params['id'];
    });
    this.getMenuItemDetails();
    this.getMenuItemCategory();
  }

  getMenuItemDetails() {
    this.menuService.getMenuItemById(this.menuItemId).subscribe({
      next: (res) => this.menuItem = res,
      error: (e) => console.error(e),
    })
  }
  getMenuItemCategory(){
    this.menuService.getMenuItemCategory(this.menuItemId).subscribe({
      next: (res) => this.menuItemCategory = res,
      error: (e) => console.error(e),
    })
  }
}