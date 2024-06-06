import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home-wrapper',
  standalone: true,
  imports: [HeroComponent, AboutUsComponent, WhyUsComponent],
  templateUrl: './home-wrapper.component.html',
  styleUrl: './home-wrapper.component.scss'
})
export class HomeWrapperComponent {

}
