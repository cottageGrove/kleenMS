
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable()
export class LogService {
    constructor() {}

    private emitOrderTotal = new Subject<any>()
    orderDataSource = new BehaviorSubject('')
    data = this.orderDataSource.asObservable()

    editDataSource = new BehaviorSubject(false)
    editData = this.editDataSource.asObservable()

    emitChange(data) {
        this.orderDataSource.next(data)
    }

    emitEditChange(editData) {
        this.editDataSource.next(editData)
    }

}