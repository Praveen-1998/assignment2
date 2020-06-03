import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css']
})
export class ApiDetailsComponent implements OnInit {

  apiDetails:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335&lang=zh_cn&exclude=hourly,daily&appid={e0fe057a216598d58ceb228def17a9a0}')
    .subscribe(resData =>{
      this.apiDetails=resData;
      console.log(this.apiDetails);
    })
  }

  ngOnInit() {
  }

}
