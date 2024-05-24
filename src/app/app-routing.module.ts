import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { MponlineComponent } from './mponline/mponline.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
{path:'services',component:ServicesComponent},
{path:'contact',component:ContactusComponent},
{path:'home',component:HomeComponent},
{path:'school',component:SchoolComponent},
{path:'mponline',component:MponlineComponent},
{path:'signup',component:SignupComponent},
// {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


