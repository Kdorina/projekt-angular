import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PagesComponent } from './pages/pages.component';
import { CalcpageComponent } from './calcpage/calcpage.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup/signup.component';


const routes: Routes = [
  {path: "", redirectTo: 'dashboard', pathMatch: 'full'},
  {path: "dashboard", component:DashboardComponent},
  {path: "calcpage", component:CalcpageComponent},
  {path: "pages", component:PagesComponent},
  {path: "calendar", component:CalendarComponent},
  {path: "add", component:NewSubjectComponent},
  {path: "edit/:subjectId", component:EditSubjectComponent},
  {path: "login", component:LoginComponent},
  {path: "signup", component:SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
