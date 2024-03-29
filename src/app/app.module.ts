import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './useraccess/login/login.component';
import { RegisterComponent } from './useraccess/register/register.component';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthInterceptor } from './interceptors/authInterceptor';
import { DialogueBoxComponent } from './dialogue-box/dialogue-box.component';
import { LoadingInterceptor } from './interceptors/loadingInterceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    DialogueBoxComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    GridModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorCatchingInterceptor,
    multi: true
 },
 {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
},
{
  provide: HTTP_INTERCEPTORS,
  useClass: LoadingInterceptor,
  multi: true
},
],
  bootstrap: [AppComponent]
})
export class AppModule { }
