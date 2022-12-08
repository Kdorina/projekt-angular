import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { CalcpageComponent } from './calcpage/calcpage.component';
import { PagesComponent } from './pages/pages.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//REGLOG
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    CalcpageComponent,
    PagesComponent,
    CalendarComponent,
    SubjectsComponent,
    NewSubjectComponent,
    EditSubjectComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
