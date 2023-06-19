import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
// import { AuthGuardService } from '../common/services/auth-guard';

const routes: Routes = [
    {path:'',component:UserComponent,},
    {path:'add/',component:UserDetailsComponent},
    {path:'edit/:id',component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
