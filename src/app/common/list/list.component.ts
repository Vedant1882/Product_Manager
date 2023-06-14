import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { dataType } from '../Enum/dataType';
import { LoaderService } from '../services/loader';
import { PageEvent } from '@angular/material/paginator';
import { TableFilter } from 'src/app/models/tableFilter';
import { Subject, debounceTime } from 'rxjs';
import { DisplayedHeaders } from 'src/app/models/displayedHeader';
import { MatSort, Sort } from '@angular/material/sort';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent implements OnInit {

  @ViewChild('empTbSort') empTbSort = new MatSort();
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
  public displayedHeader:DisplayedHeaders;
  pageEvent: PageEvent;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  isData=true;
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
    this.displayedColumns = [];
    this.listHeader.forEach((x: any) => {
      this.displayedColumns.push(x.columnName);
    });
    this.tableFilter.displayedHeaders=this.displayedColumns;
    this.dataSource = new MatTableDataSource(this.dataCallBack(this.tableFilter).subscribe({
      next: (value: any) => {
        debugger;
        if(value.data.length>0){
          this.dataSource = value.data;
          this.isData=true;
        }
        else{
          this.isData=false;
        }
        this.length=value.totalPages
      },
      error(msg:any) {
        alert(msg);
      }
    }));
    this.button.forEach((x: any) => {
      this.displayedColumns.push(x.name);
    });
  }
  ngAfterViewInit() {   
    this.dataSource.sort = this.empTbSort;
}
sortData(sort: Sort) {
  this.tableFilter.sortingColumnName = sort.active;
  this.tableFilter.sortingDirection = sort.direction;
  this.refresh();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.refresh()
  }
  searchFn(value:any){
    this.tableFilter.searchValue=value;
    this.refresh()
  }
  
  refresh() {
    this.ngOnInit();
  }
}
