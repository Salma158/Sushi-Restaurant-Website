import { Component, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../interfaces/menu-item';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MenuItemComponent, FlexLayoutModule, MatCardModule, CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  menuList!: Array<MenuItem>;
  searchMode?: boolean;
  @Input() id?: any;

  constructor(private menuService: MenuService,
    private route : ActivatedRoute
  ) {}
  
  ngOnInit() {

    this.route.params.subscribe(params => {
      const keyword = params['keyword'];
      if (keyword) {
        this.handleSearchItems(keyword);
      } else{
        this.handleListItems();
      }
    });
  }
  handleSearchItems(keyword : string){
    this.menuService.searchMenuItems(keyword).subscribe({
      next: (res) => this.menuList = res._embedded.menuItems,
      error: (e) => console.error(e),
    })
  }


  handleListItems(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.listMenuItemsByCategory();
      } else {
        this.listMenuItems();
      }
    });
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