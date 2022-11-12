import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { CalcpageComponent } from './calcpage/calcpage.component';

const routes: Routes = [
  {path: "", redirectTo: 'dashboard', pathMatch: 'full'},
  {path: "dashboard", component:DashboardComponent},
  {path: "calcpage", component:CalcpageComponent},
  {path: "pages", component:PagesComponent},
  {path: "media", component:MediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
