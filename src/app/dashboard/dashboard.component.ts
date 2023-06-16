import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/user.service';
import { PageEvent } from '@angular/material/paginator';
import { TableFilter } from '../models/tableFilter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;
  constructor(private userService: UserService) { }
  pageEvent: PageEvent;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  tableFilter:TableFilter={
    pageIndex:this.pageIndex,
    pageSize:this.pageSize
  }
  ngOnInit(): void {
    debugger;
    this.tableFilter.pageIndex=this.pageIndex;
    this.tableFilter.pageSize=this.pageSize;
    this.userService.getUsers(this.tableFilter).subscribe({
      next: (value: any) => {
        this.users = value.data;
        this.length=value.totalPages
      },
      error(msg) {
        alert(msg);
      }
    });

  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.refresh()
  }
  refresh() {
    this.ngOnInit();
  }
}
