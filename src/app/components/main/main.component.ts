import { Component, OnInit, ViewChild } from '@angular/core';
import { LogTableComponent } from '../log-table/log-table.component';
import { LogService } from 'src/app/service/LogService';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild(LogTableComponent, {static: true}) logTableComponent: LogTableComponent
  @ViewChild(SearchComponent, {static: true}) searchComponent: SearchComponent

  totalOrders : number

  constructor(private LogService: LogService) { }

  ngOnInit() {

    //Assigning the number of orders number to total Orders
    //This badge will be presented in the sidenav menu
    this.LogService.data.subscribe(data => {

      var nTotalOrders = parseInt(data)

      this.totalOrders = nTotalOrders
    })
    // this.logTableComponent.getOrderLength()
  }

}
 