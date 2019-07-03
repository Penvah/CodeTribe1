import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookInComponent } from './book-in/book-in.component';
import { PaymentComponent } from './payment/payment.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{path:"",component:LoginComponent},
{path:"menu",component:MenuComponent,children:[{path:"",component:AboutComponent},{path:"about", redirectTo:""},
{path:"book-info",component:BookInfoComponent},
{path:"book-in",component:BookInComponent},{path:"payment",component:PaymentComponent},{path:"detail",component:DetailComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
