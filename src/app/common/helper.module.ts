import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({

  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListComponent,
    MaterialModule,
    CommonModule
  ],
})
export class HelperModule { }
