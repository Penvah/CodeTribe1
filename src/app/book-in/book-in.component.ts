import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-in',
  templateUrl: './book-in.component.html',
  styleUrls: ['./book-in.component.scss']
})
export class BookInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigateByUrl("menu/book-info")
  }
}
