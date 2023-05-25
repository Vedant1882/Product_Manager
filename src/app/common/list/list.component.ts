import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  dateFormate=AppConstants.dateFormat;
@Input() data:any=[];
editData:any|undefined;
@Output() newItemEvent = new EventEmitter<string>();
edit(value: any) {
  this.editData=value;
  this.newItemEvent.emit(this.editData);
}
}
