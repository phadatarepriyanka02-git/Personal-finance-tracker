import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TrnsactionService } from 'src/app/core/services/trnsaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  public allTransactions:any=[];
  public headers:any=['Id','User Id','Amount','Date','Category','Description'];
  public transactionForm:any;
  public showupdate:Boolean=false;
  public searchTerm:any;

     itemsPerPage:any=3;
   startIndex:any=0;
   endIndex:any=this.itemsPerPage;
   noPages:any=0;
   PagesArray:any=[];
   counter:number=1;
   initialPage:any=1;
   
   
   initialData:any;


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
      this.initialData=this.allTransactions?.slice(0,this.endIndex);
      this.calculateNoPages();
    });

     
  }

  onAdd(){
  // console.log(this.transactionForm.value);
   this.showupdate=true;
   this.transactionForm.removeControl('id')
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
    this.showupdate=true;

    this.transactionForm.patchValue({
      id:entry.id,
      userId:sessionStorage.getItem('userId'),
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


 
   calculateNoPages(){
   this.noPages=Math.ceil(this. allTransactions?.length/this.itemsPerPage);
    this.PagesArray=[];
   for(let i=1;i<=this.noPages;i++){
    this.PagesArray.push(i);
   }
  // console.log(this.PagesArray);

   }
    onSelectChange(dt:any){
    console.log(this.itemsPerPage);
    this.itemsPerPage=parseInt(dt);
    this.endIndex=this.itemsPerPage;
     this.initialData=this.allTransactions?.slice(0,this.endIndex);
      this.calculateNoPages();
      //console.log(this.noPages);
   }

   
   backwardClick(){
   this.endIndex=this.endIndex-this.itemsPerPage;
   this.startIndex=this.endIndex-this.itemsPerPage;//3
     this.initialData=this.allTransactions?.slice(this.startIndex,this.endIndex);
      this.counter--;
   }
  
   forwardclick(){
    this.startIndex=this.endIndex;
    this.endIndex=this.startIndex+this.itemsPerPage;
    this.initialData=this.allTransactions?.slice(this.startIndex,this.endIndex);
   // console.log(this.endIndex);
   this.counter++;
   }
 
   executeFn(input:any){
    var cal=input-this.initialPage;
     console.log("Input",input);
     if(input>this.initialPage){
      for(let j=1;j<=cal;j++){
        this.forwardclick();
       this.initialPage=input;
        console.log("Inital Page",this.initialPage);
        }

        
      }
      else if(input<this.initialPage){
         for(let j=1;j<=Math.abs(cal);j++){
          console.log(j);
        this.backwardClick();
        this.initialPage=input;
        
        }
      }
     } 

    filteredTransactions() {
  let filtered = this.allTransactions;

  if (this.searchTerm) {
    const lowerTerm = this.searchTerm?.toLowerCase();
    filtered = this.allTransactions?.filter((item: any) =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowerTerm)
      )
    );
  }

  this.noPages = Math.ceil(filtered?.length / this.itemsPerPage);
  this.PagesArray = Array.from({ length: this.noPages }, (_, i) => i + 1);

  // console.log(filtered);
  return filtered?.slice(this.startIndex, this.endIndex);
}



 debounce(func: Function, delay: number) {
  let timer: any; 
  return function(...args:any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  }
}


updateSearch(term?: string) {
  this.searchTerm = term;
  this.startIndex = 0; 
  this.endIndex = this.itemsPerPage;
}

debouncedSearch = this.debounce(this.updateSearch, 300);


}
