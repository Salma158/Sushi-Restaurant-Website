import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl = 'https://sushi-restaurant-website-8.onrender.com/api'

  constructor(private http : HttpClient) {}

  getMenuItems(): Observable<any>{
    return this.http.get(`${this.baseUrl}/menuItems`)
  }

  getMenuItemsByCategory(categoryId : string): Observable<any>{
    return this.http.get(`${this.baseUrl}/menu-item-category/${categoryId}/menuItems`)
  }

  searchMenuItems(keyword: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/menuItems/search/findByNameContaining?name=${keyword}`)
  }

  getMenuItemById(itemId : string): Observable<any>{
    return this.http.get(`${this.baseUrl}/menuItems/${itemId}`)
  }

  getMenuItemCategory(itemId : string):Observable<any>{
    return this.http.get(`${this.baseUrl}/menuItems/${itemId}/category`)

  }
}