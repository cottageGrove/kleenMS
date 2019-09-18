import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class FilterService {
    constructor() {} 
    private emitFilterItem = new Subject<any>()

    filterItemSource = new BehaviorSubject('')
    clearItemSource = new BehaviorSubject('')

    data = this.filterItemSource.asObservable()
    removeData = this.clearItemSource.asObservable()

    emitChange(data) {
        this.filterItemSource.next(data)
    }
    
    emitClearChange(data) {
        this.clearItemSource.next(data)
    }

}