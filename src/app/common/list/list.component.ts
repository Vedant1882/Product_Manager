import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { dataType } from '../Enum/dataType';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent implements OnInit {


  @Input() data: any;
  @Input() listType: any = [];
  @Input() listHeader: any = [];
  @Input() button: any = [];
  @Input() toolBar: any = [];
  @Input() dataCallBack:any;
  editData: any | undefined;
  dataType = dataType;
  dateFormate = AppConstants.dateFormat;
  dataSource = new MatTableDataSource();
  public displayedColumns: any = [];
  constructor(private router: Router) { }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataCallBack.subscribe({
      next: (value: any) => {
        this.dataSource = value;
      },
      error(msg:any) {
        alert(msg);
      }
    }));
    this.displayedColumns = [];
    this.listHeader.forEach((x: any) => {
      this.displayedColumns.push(x.columnName);
    });
    this.button.forEach((x: any) => {
      this.displayedColumns.push(x.name);
    });
  }
  refresh() {
    this.ngOnInit();
  }
}
