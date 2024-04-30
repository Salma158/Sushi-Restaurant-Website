import { Routes } from '@angular/router';
import { HomeWrapperComponent } from './pages/home/home-wrapper/home-wrapper.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { MenuItemsComponent } from './pages/admin/menu-items/menu-items.component';

export const routes: Routes = [
    {path: '', title: 'home', component: HomeWrapperComponent},
    {path: 'menu', title: 'menu', component: MenuComponent},
    {path: 'category/:id', title: 'category-items', component: MenuComponent},
    {path: 'category' , title: 'category', component: MenuComponent},
    {
        path: 'admin',
        component: AdminDashboardComponent,
        children: [
            { path: 'menuitems', title: 'admin-menuItems' , component: MenuItemsComponent }
        ]
    },
    {path: 'search/:keyword', title: 'search', component: MenuComponent}
];
