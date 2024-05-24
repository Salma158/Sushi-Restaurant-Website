import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseUrl = 'http://localhost:8080/api/auth'

  constructor(private http : HttpClient) {}

  confirm(token : any) {
    return this.http.get(`${this.baseUrl}/activate-account?token=${token}`);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/authenticate`, { email, password });
  }

  register(firstname: string, lastname: string, email: string, password: string){
    return this.http.post(`${this.baseUrl}/register`, { firstname, lastname, email, password });
  }
}
