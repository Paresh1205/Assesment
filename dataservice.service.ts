import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  public url:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get(this.url);
  }
}
