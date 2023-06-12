import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    JsonPipe
  ],
  exports: [
    ListComponent,
    MaterialModule,
    CommonModule,
    FormsModule
  ],
})
export class HelperModule { }
