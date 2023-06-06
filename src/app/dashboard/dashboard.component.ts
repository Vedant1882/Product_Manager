import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (value: any) => {
        this.users = value;
      },
      error(msg) {
        alert(msg);
      }
    });

  }
}
