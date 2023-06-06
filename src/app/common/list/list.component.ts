import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'
import { Router } from '@angular/router';
import { dataType } from '../Enum/dataType';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent implements OnInit {


  @Input() data: any = [];// = new MatTableDataSource();
  @Input() listType: any = [];
  @Input() listHeader: any = [];
  @Input() button: any = [];
  @Input() toolBar: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newItemEvent1 = new EventEmitter<string>();
  @Output() newItemEvent2 = new EventEmitter<string>();
  editData: any | undefined;
  dataType = dataType;
  dateFormate = AppConstants.dateFormat;
  dataSource = new MatTableDataSource(this.data);
  public displayedColumns: any = [];
  constructor(private router: Router) { }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = [];
    this.listHeader.forEach((x: any) => {
      this.displayedColumns.push(x.columnName);
    });
    this.button.forEach((x: any) => {
      this.displayedColumns.push(x.name);
    });

  }
  add() {
    this.newItemEvent1.emit();
    this.ngOnInit();
    this.router.navigate(['category/add', '']);
  }
  refresh() {
    this.ngOnInit();
  }
}
