import { Component } from '@angular/core';
import { TrnsactionService } from 'src/app/core/services/trnsaction.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public balance:any=0;
  public expense:any=0;
  public income:any=0;
  constructor(private custServ:TrnsactionService){
    this.getTransactionDetails();
  }

  getTransactionDetails(){
    let userId=sessionStorage.getItem('userId');
   // console.log(userId);
   this.custServ.getTransactiondetails(userId).subscribe((res:any)=>{
    console.log(res);

    res.forEach((ele:any)=>{
      if(ele.category=="Income"){
        this.balance= this.balance + ele.amount;
        this.income += ele.amount;
      }else{
        this.balance=this.balance - ele.amount;
        this.expense += ele.amount;
      }
    })
    //console.log(this.balance);
   })

  

  }
}
