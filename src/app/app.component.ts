import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  user = null;

  constructor(
    private httpClient: HttpClient
  ){
    this.httpClient.get<any>('http://localhost:3000/getUser').subscribe((response)=>{
      console.log('response: ',response);
      this.user = response;
    })
  }
}
