import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelperModule } from '../common/helper.module';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    UserRoutingModule,
    FormsModule,
    HelperModule
  ],
})
export class UserModule { }
