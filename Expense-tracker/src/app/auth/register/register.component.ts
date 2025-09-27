import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registrationForm:any;
  constructor(private fb:FormBuilder,private logServ:LoginServiceService,private rout:Router){
    this.registrationForm=this.fb.group({
      name:[''],
      username:[''],
      password:[''],
      confirmPassword:['']
    })
  }

  onRegister(){
    this.registrationForm.removeControl('confirmPassword');
    this.logServ.addUserData(this.registrationForm.value).subscribe((res:any)=>{
      // console.log(res)
    });
    this.rout.navigateByUrl('')
    this.logServ.isRegisterd=true;
  }

}
