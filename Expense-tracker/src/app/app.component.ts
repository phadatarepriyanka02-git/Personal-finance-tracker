import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showNav:Boolean=false;
 

  constructor(private router:Router){
       this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd || event instanceof NavigationStart) {
       if(sessionStorage.getItem('isLoggedin')== 'true'){
         this.showNav=true;
       }else{
        this.showNav=false;
       }
      
      }
    });
  }
}
