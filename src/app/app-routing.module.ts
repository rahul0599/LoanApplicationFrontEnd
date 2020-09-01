import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SubmitAppPageComponent } from './components/submit-app-page/submit-app-page.component';
import { ViewAppPageComponent } from './components/view-app-page/view-app-page.component';
import { SubmitSuccessComponent } from './components/submit-success/submit-success.component';
import { ViewAppDetailsComponent } from './components/view-app-details/view-app-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'}, 
  {path:'home', component:HomePageComponent},
  {path:'submit', component:SubmitAppPageComponent},
  {path:'view', component:ViewAppPageComponent},
  {path:'success', component:SubmitSuccessComponent},
  {path:'details', component:ViewAppDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
