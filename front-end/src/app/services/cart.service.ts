import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menu-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = 'http://localhost:8080/api'

  constructor(private http : HttpClient) {}

  addToCart(menuItem : MenuItem): Observable<any>{
    return this.http.post(`${this.baseUrl}/add-to-cart`,{ itemId : menuItem.id, quantity : 1})
  }

  getCartItems(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getItems`)
  }

}
