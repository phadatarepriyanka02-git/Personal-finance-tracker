import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrnsactionService } from 'src/app/core/services/trnsaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public history:any;
  public expensesData:any;
  constructor(private custSrv:TrnsactionService,private rout:Router){
    this.getTransactions();
  }
  
  getTransactions(){
    let userId=sessionStorage.getItem('userId');
    this.custSrv.getTransactiondetails(userId).subscribe((res:any)=>{
       this.expensesData=res;
     res.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
     if(res.length>5){
       this.history=res.slice(0,5);
     }else{
      this.history=res;
     }
    
  //  console.log("sorted transaction",res);
   console.log("sorted transaction",this.history);
    })

   
  }



  viewAll(){
    console.log("hi");
    this.rout.navigateByUrl('/expenseMod/transactions')
  }
}
