import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public isRegisterd=false;

  constructor(private http:HttpClient) { 

  }

  getUserData(){
    return this.http.get("http://localhost:3000/users");
  }

  addUserData(dt:any){
    return this.http.post("http://localhost:3000/users",dt);
  }
}
