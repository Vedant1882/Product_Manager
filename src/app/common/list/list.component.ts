import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() data: any = [];
  @Input() listHeader: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newItemEvent1 = new EventEmitter<string>();
  @Output() newItemEvent2 = new EventEmitter<string>();

  editData: any | undefined;
  dateFormate = AppConstants.dateFormat;

  edit(value: any) {
    this.editData = value;
    this.newItemEvent.emit(this.editData);
  }
  delete(value: any) {
    this.editData = value;
    this.newItemEvent2.emit(this.editData.id);
  }
  add() {
    this.newItemEvent1.emit();
  }
}
