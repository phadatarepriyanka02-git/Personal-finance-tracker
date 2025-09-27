import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TrnsactionService } from 'src/app/core/services/trnsaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  public allTransactions:any;
  public headers:any=['Id','User Id','Amount','Date','Category','Description'];
  public transactionForm:any;

  constructor(private transServ:TrnsactionService,private fb:FormBuilder){
    this.getAllTransactions();
    let userId=sessionStorage.getItem('userId');
    console.log(userId);
    this.transactionForm=this.fb.group({
      id:[''],
      userId:userId,
      amount:[],
      date:[''],
      category:[''],
      description:['']

    })
  }

  getAllTransactions(){
    let userId=sessionStorage.getItem('userId');
    this.transServ.getTransactiondetails(userId).subscribe((res:any)=>{
      this.allTransactions=res;
    });
  }

  onAdd(){
   console.log(this.transactionForm.value);
   this.transServ.sendTransactions(this.transactionForm.value).subscribe((res:any)=>{
   
    this.getAllTransactions();
   });
   this.transactionForm.reset();
  }

  onDelete(entry:any){
    this.transServ.deleteTransactions(entry).subscribe((res:any)=>{
     this.getAllTransactions();
   });
   
  }

   onEdit(entry:any){

    this.transactionForm.patchValue({
      id:entry.id,
      amount:entry.amount,
      date:entry.date,
      category:entry.category,
      description:entry.description
    })
   
  }

  onUpdate(){
    
    this.transServ.editTransactions(this.transactionForm.value).subscribe((res:any)=>{
     this.getAllTransactions();
  
   });
     this.transactionForm.reset();

  }

}
