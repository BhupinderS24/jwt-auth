import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupLoginComponent } from './components/signup-login/signup-login.component';

const routes: Routes = [
{path:'signup',component:SignupLoginComponent },
{path:'login',component:SignupLoginComponent },
{path : '' , redirectTo: '/signup' , pathMatch:'full'},
{path : '**' , redirectTo: '/signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
