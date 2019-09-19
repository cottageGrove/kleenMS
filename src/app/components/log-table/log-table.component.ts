import { Component, OnInit, ViewChild, OnChanges, Input, ElementRef, HostBinding } from '@angular/core';
import { ApiService } from 'src/app/service/ApiService';
import { MatTableDataSource, MatPaginator, MatTable } from '@angular/material';
import { Order } from 'src/app/model/Order';
import { LogService } from 'src/app/service/LogService';
import { FilterService } from 'src/app/service/FilterService';
import {animate, style, transition, trigger, state } from "@angular/animations";

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css'],
  animations: [
    trigger('expand', [
        state('large', style({width: '100%'})),
        state('small', style({width: '70%' })),
        transition('large <=> small', [
            animate('0.5s ease-in-out')
        ]),
        transition('small <=> large', [
            animate('0.5s ease-in-out')
        ])
    ])
]
})
export class LogTableComponent implements OnInit {


  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator
  columns: string[] = ['id', 'pickupDate', 'dropoffDate', 'deliveryTime', 'totalCost', 'baskets', 'washType', 'detergent']
  dataSource: MatTableDataSource<Order>
  totalOrders: number
  large: boolean = true

  orders: Order[]

  constructor( private API : ApiService, private LogService: LogService, private FilterService: FilterService) { }

  ngOnInit() {

    this.API.getOrders().subscribe(res => {
      console.log(res)
      
      this.orders = res
      this.dataSource = new MatTableDataSource<Order>(res)
      this.dataSource.connect()
      this.dataSource.paginator = this.paginator

      this.emitOrderLength()
    })

    this.activateFilterService()


  }

  emitOrderLength() {
    let ordersLength = this.orders.length
    this.LogService.emitChange(ordersLength)
  }

  activateFilterService() {
    //This filter service will retrieve search parameter data whenever the user clicks the search icon 
    this.FilterService.data.subscribe(data => {
      console.log('Retrieving filter data in log table ', data)

      //Will have to check whether orders are being filtered by status or by id 
      let ordersById = this.filterOrders(this.orders, data)

      this.dataSource = new MatTableDataSource<Order>(ordersById)
      this.dataSource.connect()
      this.dataSource.paginator = this.paginator

      console.log("these are the filtered orders ", ordersById)
    })

    this.FilterService.removeData.subscribe(data => {
      this.dataSource = new MatTableDataSource<Order>(this.orders)
      this.dataSource.connect()
      this.dataSource.paginator = this.paginator
    })
  }

  filterOrders(orders: Order[], key: string) {
    if (orders) {
      return orders.filter(order => order.id.substring(0,8) == key)
    }
  }

  edit() {
    console.log("trying to resize")

    if (this.large) {
      this.large = false;
    } else {
      this.large = true;
    }
  }

}
