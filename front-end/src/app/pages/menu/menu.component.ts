import { Component, Input, OnInit } from '@angular/core';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';
import { SearchComponent } from '../../components/search/search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatCardModule, MatGridListModule, FlexLayoutModule, MenuListComponent, MatSidenavModule,MatListModule, CategoriesListComponent, SearchComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  deviceXs: boolean;

  constructor() {
    this.deviceXs = false;
  }

  ngOnInit(): void {
    this.deviceXs = false;
  }

  onScroll(event: Event): void {
  }

  sideBarScroll(): number {
    return 0;
  }
}
