import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home-wrapper',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home-wrapper.component.html',
  styleUrl: './home-wrapper.component.scss'
})
export class HomeWrapperComponent {

}
