import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/Order';

import { map} from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>("http://localhost:3000/graphOrders").pipe(
            map(res => {
                return res.map(order => {
                    return new Order(order.id, order.pickupDate,order.dropoffDate,order.deliveryTime,order.totalCost, order.status, order.laundry)
                })
        }))
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.post<Order>("http://localhost:3000/graphOrder", order).pipe(
            map(order => {
                return new Order(order.id, order.pickupDate, order.dropoffDate, order.deliveryTime, order.totalCost, order.status, order.laundry)
                
            } )
        )
    }
}