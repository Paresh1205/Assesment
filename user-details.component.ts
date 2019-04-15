import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../service/dataservice.service';
import { Router } from '@angular/router';
import{UserData} from '../user.interface';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public Users:any;
  public item:any;
  public user:UserData;
  constructor(private dataService:DataserviceService ,private router: Router) { }
  ngOnInit(){
      this.user = JSON.parse(sessionStorage.getItem('user'));
  }
  submit(UserData){
    // console.log(user);
    // console.log(valid);
    this.router.navigateByUrl('/confirm');
  };
  confirm(){
    this.router.navigateByUrl('/user-list');
  }
}
