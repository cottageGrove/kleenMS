import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.css']
})
export class StatusComponentComponent implements OnInit {


  orderStatus: string[] = ['not started', 'pending', 'assigned', 'picked up ', 'at facility', 'wash completed', 'dispatched', 'delivered', 'completed']

  constructor() { }

  @Input() order: Order

  ngOnInit() {


  }

  ngOnChanges() {
    console.log('onChanges in the status component ', this.order)
  }

}
