
import {Laundry} from './Laundry'

export class Order {
    constructor(public id: string, public pickupDate: string, public dropoffDate: string, public deliveryTime: string, public totalCost: string,
                public laundry: Laundry,) {}
}