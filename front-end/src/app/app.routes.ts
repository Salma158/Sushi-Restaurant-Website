import { Routes } from '@angular/router';
import { HomeWrapperComponent } from './pages/home/home-wrapper/home-wrapper.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    {path: '', title: 'home', component: HomeWrapperComponent},
    {path: 'menu', title: 'menu', component: MenuComponent}
];
