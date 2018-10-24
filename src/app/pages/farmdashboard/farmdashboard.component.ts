import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-farmdashboard',
  templateUrl: './farmdashboard.component.html',
  styleUrls: ['./farmdashboard.component.scss']
})
export class FarmdashboardComponent implements OnInit {
  
  ngOnInit() {
  }
  constructor(private themeService: NbThemeService) {    
   
  } 

}
