import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/model/Order';

import {animate, style, transition, trigger, state } from "@angular/animations";
@Component({
  selector: 'app-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.css'],
  animations: [    trigger('selectStatus', [
    state('right', style({right: '10px'})),
    state('left', style({left: '20px' })),
    transition('right <=> left', [
        animate('0.1s ease-in-out')
    ]),
    transition('right <=> left', [
        animate('0.1s ease-in-out')
    ])
  ])]
})
export class StatusComponentComponent implements OnInit {


  orderStatus: any[] = [{'status': 'not started'}, {'status': 'pending'}, {'status': 'assigned'}, 
                        {'status': 'picked up '}, {'status': 'at facility'}, 
                        {'status': 'wash completed'}, {'status':'dispatched'}, 
                        {'status':'delivered'}, {'status': 'completed'}]

  isPressed : boolean = false


  constructor() { }

  @Input() order: Order

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('onChanges in the status component ', this.order)
  }

  toggleColor(item: any) {

    item.isPressed = true
    this.orderStatus.forEach(element => {
      
      if(element == item) {

        if(item.isPressed) {
          console.log('item is pressed ', item.status)
          return
        }

        item.isPressed = false


      } else {
        element.isPressed = false
      }
    });

  }

}
