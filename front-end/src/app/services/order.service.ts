import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = 'https://sushi-restaurant-website-8.onrender.com/api'

  constructor(private http: HttpClient) { }

  placeOrder(shippingAddress: any): Observable<any> {
    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post(`${this.baseUrl}/place-order`, shippingAddress, { headers });
  }
  
}
