import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  confirm:string;
  checkinDate: string;
  checkoutDate:string;
  days: string;
  phoneNumber: string;
  height: string;
  number:string;
  female:string;
  male:string;
  constructor(private router: Router) { }
//onLogin(){this.router.navigateByUrl("Menu")}

  ngOnInit() {
  }
  onLogin(){this.router.navigateByUrl("/menu")}
  

  onClick()
  {
  
    this.router.navigate(['menu/book-info'], { queryParams: { firstName: this.firstName, lastName: this.lastName,email:this.email,
      password:this.password,confirm:this.confirm,checkinDate:this.checkinDate,days:this.days,checkoutDate:this.checkoutDate,phoneNumber:this.phoneNumber,height:this.height,
      number:this.number,female:this.female,male:this.male} 
  });
  }
}


