import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../service/dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public Users:any;
  constructor(private dataService:DataserviceService ,private router: Router) { }
  ngOnInit(){
    this.dataService.getUser().subscribe(response => {
      this.Users  = response;
      // console.log(response);
    });
  }
  username(userId){
    sessionStorage.setItem('user' , JSON.stringify(userId));
    this.router.navigateByUrl('/user-details');
  }
}
