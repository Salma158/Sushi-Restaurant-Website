import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  baseUrl = 'http://localhost:8080/api'

  constructor(private http : HttpClient) {}

  getAllCategories(): Observable<any>{
    return this.http.get(`${this.baseUrl}/menu-item-category`)
  }
}
