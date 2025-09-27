import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginform:any;
  public message:any;
  public showAlert:Boolean=false;
  public alertType:any;

  constructor(private fb:FormBuilder,private logServ:LoginServiceService,private rout:Router){
    this.loginform=this.fb.group({
      username:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    })
  }

  onLogin(){
    this.logServ.getUserData().subscribe((res:any)=>{
      //console.log(res);
      let result=res.filter((ele:any)=>(ele.username==this.loginform.value.username) && (ele.password==this.loginform.value.password));
      //console.log(result);
      if(result.length){
        this.showSuccess("Loggedin successfully");
        setTimeout(()=>{
          this.rout.navigateByUrl('dashMod/dashboard')
        },2000);
        sessionStorage.setItem('userId', result[0].id); 
         sessionStorage.setItem('isLoggedin', 'true'); 
      }else{
        this.showError('User does not exist!');
      }
    })
  }

 showSuccess(msg: string) {
  this.alertType = 'success';
  this.message = msg;
  this.showAlert = true;
  setTimeout(() => this.showAlert = false, 3000);
}

showError(msg: string) {
  this.alertType = 'danger';
  this.message = msg;
  this.showAlert = true;
  setTimeout(() => this.showAlert = false, 3000);
}



}
