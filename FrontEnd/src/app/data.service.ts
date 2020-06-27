import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  signUp(data):any
  {
    return this.http.post(this.baseURL + "/signup", data);
  }
  signIn(data): any 
  {
    return this.http.post(this.baseURL + "/signin", data);
  }
}
