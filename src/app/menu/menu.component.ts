import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navArray =[{path:"menu/about",name:"About"},{path:"menu/book-in",name:"Book-In"},{path:"menu/payment",name:"Payment"},]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onNavigate(item)
  {
    this.router.navigateByUrl(item.path)
}
}