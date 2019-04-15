import { Component , OnInit} from '@angular/core';
import {DataserviceService} from './service/dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Users:any;
  constructor(private dataService:DataserviceService){}
  ngOnInit(){}
}
