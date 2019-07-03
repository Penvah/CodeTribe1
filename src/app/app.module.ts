import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookInComponent } from './book-in/book-in.component';
import { PaymentComponent } from './payment/payment.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AboutComponent,
    BookInfoComponent,
    FacilitiesComponent,
    GalleryComponent,
    BookInComponent,
    PaymentComponent,
    DetailComponent
  ],
  imports: [ReactiveFormsModule,FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
