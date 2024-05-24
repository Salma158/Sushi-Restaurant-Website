import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { WhyUsComponent } from '../why-us/why-us.component';

@Component({
  selector: 'app-home-wrapper',
  standalone: true,
  imports: [HeroComponent, WhyUsComponent],
  templateUrl: './home-wrapper.component.html',
  styleUrl: './home-wrapper.component.scss'
})
export class HomeWrapperComponent {

}
