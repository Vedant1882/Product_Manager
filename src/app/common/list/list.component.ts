import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { dataType } from '../Enum/dataType';
import { LoaderService } from '../services/loader';
import { PageEvent } from '@angular/material/paginator';
import { TableFilter } from 'src/app/models/tableFilter';
import { Subject, debounceTime } from 'rxjs';
import { DisplayedHeaders } from 'src/app/models/displayedHeader';


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
  public displayedHeader:DisplayedHeaders
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  
  private subject: Subject<string> = new Subject();
  constructor(private router: Router,public loader: LoaderService) { }
  tableFilter:TableFilter={
    pageIndex:this.pageIndex,
    pageSize:this.pageSize
  }
  ngOnInit() {
    console.log(this.pageEvent);
    this.tableFilter.pageIndex=this.pageIndex;
    this.tableFilter.pageSize=this.pageSize;
    debugger;
    this.displayedColumns = [];
    this.listHeader.forEach((x: any) => {
      this.displayedColumns.push(x.columnName);
    });
    this.tableFilter.displayedHeaders=this.displayedColumns;
    this.dataSource = new MatTableDataSource(this.dataCallBack(this.tableFilter).subscribe({
      next: (value: any) => {
        this.dataSource = value;
      },
      error(msg:any) {
        alert(msg);
      }
    }));
   
    this.button.forEach((x: any) => {
      this.displayedColumns.push(x.name);
    });
  }

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.refresh()
  }
  searchFn(event:any){
    //this.tableFilter.searchValue=event.key;
    this.refresh()
  }

  refresh() {
    this.ngOnInit();
  }
}
