import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input()name:string;
  @Input()surname:string;
  @Input()email:string;
  @Input()location:string;
  @Input()number:string;
  
    constructor(private router:ActivatedRoute) { }
  
  ngOnInit() {
    this.router.queryParams
    .subscribe(params => {
      console.log(params);

      this.name = params.name
      console.log(this.name),
      this.surname= params.lastName
      console.log(this.surname)
      
      this.email = params.email
      console.log(this.email),
      this.location = params.location
      console.log(this.location),
      this.number = params.number
      console.log(this.number)
    });
    
  }

}