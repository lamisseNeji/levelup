import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module' ).then(m=>m.AuthModule)},
  {path: 'signup', component: SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
