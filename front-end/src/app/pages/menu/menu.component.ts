import { Component } from '@angular/core';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';
import { SearchComponent } from '../../components/search/search.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuListComponent, MatSidenavModule,MatListModule, CategoriesListComponent, SearchComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
