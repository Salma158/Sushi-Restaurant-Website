import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menu-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = 'https://sushi-restaurant-website-8.onrender.com/api'

  constructor(private http: HttpClient) { }


  addToCart(menuItem: MenuItem): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}/add-to-cart`,
      { itemId: menuItem.id, quantity: 1 },
      { headers });
  }

  getCartItems(): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/getItems`, {headers})
  }

  removeFromCart(menuItem: MenuItem, quantity: number): Observable<any> {
    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    const params = new HttpParams()
      .set('itemId', menuItem.id.toString())
      .set('quantity', quantity);
  
    return this.http.delete(`${this.baseUrl}/removeItem`, { headers, params });
  }
}
