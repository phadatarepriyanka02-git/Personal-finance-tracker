import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrnsactionService {

  constructor(private http:HttpClient) {

   }

   getTransactiondetails(id:any){
    //console.log("service console",this.http.get(`http://localhost:3000/transactions?userId=${id}`));
    return this.http.get(`http://localhost:3000/transactions?userId=${id}`);
   }

   sendTransactions(dt:any){
    //console.log("hi");
    return this.http.post("http://localhost:3000/transactions",dt);
   }


   
   deleteTransactions(dt:any){
    //console.log("hi");
    return this.http.delete(`http://localhost:3000/transactions/${dt.id}`);
   }

   editTransactions(dt:any){
    //console.log("hi");
    return this.http.put(`http://localhost:3000/transactions/${dt.id}`,dt);
   }

   
}
