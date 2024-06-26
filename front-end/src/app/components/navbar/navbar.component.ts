import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet,MatSidenavModule,
     MatSidenavContainer, MatListModule, MatIconModule, 
     MatToolbarModule, MatMenuModule, FlexLayoutModule,
     FooterComponent
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  token = localStorage.getItem('token')
}
