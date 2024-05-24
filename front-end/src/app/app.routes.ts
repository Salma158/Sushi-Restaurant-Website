import { Routes } from '@angular/router';
import { HomeWrapperComponent } from './pages/home/home-wrapper/home-wrapper.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { MenuItemsComponent } from './pages/admin/menu-items/menu-items.component';
import { MenuItemDetailsComponent } from './pages/menu-item-details/menu-item-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: '', title: 'home', component: HomeWrapperComponent},
    {path: 'about', title: 'about-us', component: AboutComponent},
    {path: 'menu', title: 'menu', component: MenuComponent},
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
    {path: 'contact', title: 'contact-us', component: ContactComponent},
    {path: 'category/item-details/:id', title: 'item-details' , component: MenuItemDetailsComponent},
    {path: 'activate-account', title: 'activate-account', component :ActivateAccountComponent},
    {path: 'login', title: 'login', component: LoginComponent},
    {path: 'cart', title: 'cart', component: CartComponent},
    {path: 'register', title: 'register', component: RegisterComponent}
];
