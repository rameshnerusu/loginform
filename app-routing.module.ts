import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './components/home1/home1.component';
import { About1Component } from './components/about1/about1.component';
import { Home2Component } from './components/home2/home2.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', component: RegisterComponent },
  {path:"", redirectTo: "home", pathMatch:"full" },
  {path:"home",component:RegisterComponent},
     
     {path:"about1",component:About1Component}
     
     
];
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
