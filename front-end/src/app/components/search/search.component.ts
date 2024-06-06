import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule,MatInputModule, MatFormFieldModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private menuService: MenuService, private router : Router){}

      search(value: string){
        this.router.navigate([`/search/${value}`]);
  }
}
