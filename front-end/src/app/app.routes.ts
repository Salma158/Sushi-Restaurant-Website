import { Routes } from '@angular/router';
import { HomeWrapperComponent } from './pages/home/home-wrapper/home-wrapper.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { MenuItemsComponent } from './pages/admin/menu-items/menu-items.component';
import { MenuItemDetailsComponent } from './pages/menu-item-details/menu-item-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', title: 'home', component: HomeWrapperComponent},
    {path: 'about', title: 'about-us', component: AboutComponent},
    {path: 'menu', title: 'menu', component: MenuComponent,
        children: [
            {path: 'item-details', title: 'item-details' , component: MenuItemDetailsComponent}
        ]
    },
    {path: 'category/:id', title: 'category-items', component: MenuComponent},
    {path: 'category' , title: 'category', component: MenuComponent},
    {
        path: 'admin',
        component: AdminDashboardComponent,
        children: [
            { path: 'menu-items', title: 'admin-menuItems' , component: MenuItemsComponent }
        ]
    },
    {path: 'search/:keyword', title: 'search', component: MenuComponent},
    {path: 'contact', title: 'contact-us', component: ContactComponent}
];
