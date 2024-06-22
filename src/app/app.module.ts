import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SchoolComponent } from './school/school.component';
import { ServicesComponent } from './services/services.component';
import { MponlineComponent } from './mponline/mponline.component';
import { CounslingComponent } from './counsling/counsling.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { TempComponent } from './temp/temp.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ImgcrationComponent } from './imgcration/imgcration.component';
import { UploadComponent } from './upload/upload.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SitebarComponent,
    ContactusComponent,
    SchoolComponent,
    ServicesComponent,
    MponlineComponent,
    CounslingComponent,
    SignupComponent,
    DashboardComponent,
    UserlistComponent,
    TempComponent,
    CourseComponent,
    LoginComponent,
    AboutComponent,
    ImgcrationComponent,
    UploadComponent,
    AdminpanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
