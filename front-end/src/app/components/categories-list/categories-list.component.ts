import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Category } from '../../interfaces/category';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MenuListComponent } from '../menu-list/menu-list.component';
@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [RouterLink, MatListModule, MenuListComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
  categories! : Array<Category>;

  constructor(private menuService : MenuService){}

  ngOnInit(){
  this.menuService.getAllCategories().subscribe({
    next: (res) => this.categories = res._embedded.category,
    error: (e) => console.error(e),
})}
}
