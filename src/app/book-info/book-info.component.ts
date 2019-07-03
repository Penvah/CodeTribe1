import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  name : string;
  surname : string;
  email : string;
  location: string;
  number: string;

  constructor(private router: Router) { }

//onLogin(){this.router.navigateByUrl("Detail")}
  ngOnInit(){

  } 

    onLogin()
    {
      this.router.navigate(['menu/detail'], { queryParams: { name: this.name, surname: this.surname, email:this.email,
        location: this.location, number: this.number} 
    });
    }
  }