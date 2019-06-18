import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  
  @Input()firstName:string;
  @Input()lastName:string;
  @Input()email:string;
  @Input()password:string;
  @Input()confirm:string;
  @Input()checkinDate:string;
  @Input()checkoutDate:string;
  @Input()days:string;
  @Input()phoneNumber:string;
  @Input()height:string;
  @Input()number:string;
  @Input()female:string;
  @Input()male:string;
    constructor(private router:ActivatedRoute) { }
  
  ngOnInit() {
    this.router.queryParams
    .subscribe(params => {
      console.log(params);

      this.firstName = params.firstName
      console.log(this.firstName),
      this.lastName= params.lastName
      console.log(this.lastName)
      
      this.email = params.email
      console.log(this.email),
      this.email = params.password
      console.log(this.password),
      this.confirm = params.confirm
      console.log(this.confirm),
      this.checkinDate= params.checkinDate
      console.log(this.checkinDate),
      this.checkoutDate = params.checkoutDate
      console.log(this.checkoutDate),
      this.days = params.days
      console.log(this.days),
      this.phoneNumber= params.phoneNumber
      console.log(this.phoneNumber)
      this.height = params.height
      console.log(this.height),
      this.number = params.number
      console.log(this.number),
      
      
      this.female = params.female
      console.log(this.female),
      this.male = params.male
      console.log(this.male)
      
    });
  }
}
