import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [{path:"",component:LoginComponent},
{path:"menu",component:MenuComponent,children:[{path:"about",component:AboutComponent},
{path:"book-info",component:BookInfoComponent},{path:"gallery",component:GalleryComponent},
{path:"facilities",component:FacilitiesComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
