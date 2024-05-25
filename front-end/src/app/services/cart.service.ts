import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menu-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = 'http://localhost:8080/api'

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

  removeFromCart(menuItem: MenuItem): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch(`${this.baseUrl}/removeItem`,
      { itemId: menuItem.id, quantity: 1 },
      { headers });
  }

}
