import { Component } from '@angular/core';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuService } from '../../services/menu.service';
import { Category } from '../../interfaces/category';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuListComponent, MatSidenavModule,MatListModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  categories! : Array<Category>;

  constructor(private menuService : MenuService){}

  ngOnInit(){
  this.menuService.getAllCategories().subscribe({
    next: (res) => this.categories = res._embedded.category,
    error: (e) => console.error(e),
})}

}
