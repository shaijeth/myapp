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
    SignupComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
