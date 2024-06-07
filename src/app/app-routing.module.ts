import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { MponlineComponent } from './mponline/mponline.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TempComponent } from './temp/temp.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{path:'services',component:ServicesComponent},
{path:'contact',component:ContactusComponent},
{path:'home',component:SignupComponent},
{path:'school',component:SchoolComponent},
{path:'mponline',component:MponlineComponent},
{path:'signup',component:SignupComponent},
{path:'dashboard',component:DashboardComponent},
{path:'temp',component:TempComponent},
{path:'course',component:CourseComponent},
{path:'login',component:LoginComponent}

];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


