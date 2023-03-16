import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  contact: any;

  constructor(private http:HttpClient) { }
  usersignup(data:any){
    return this.http.post("http://localhost:3000/usersignup",data)
  }
}
