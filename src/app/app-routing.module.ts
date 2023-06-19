import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './useraccess/login/login.component';
import { RegisterComponent } from './useraccess/register/register.component';
import { AuthGuard } from './common/services/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'product', loadChildren: () => import('./products/product.module').then(m => m.ProductModule), canActivate: [AuthGuard] },
  { path: 'category', loadChildren: () => import('./categories/category.module').then(m => m.CategoryModule), canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => import('./users/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
