import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  baseUrl = 'https://sushi-restaurant-website-8.onrender.com/api'

  constructor(private http : HttpClient) {}

  getAllCategories(): Observable<any>{
    return this.http.get(`${this.baseUrl}/menu-item-category`)
  }
}
