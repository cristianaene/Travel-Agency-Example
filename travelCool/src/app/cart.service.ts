import { findLast } from '@angular/compiler/src/directive_resolver';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items : Array <any>= [];
 
    constructor() { }
    /**
     * Adds new destinations to shopping cart and adjusts the number of items
     * @param offer current destination
     */
    addDestination (offer : any) :void {
        let item = this.items.find(x => x.id == offer.id);
        if (item){
            item.count++;
        } else {
            this.items.push({
                id: offer.id,
                destination: offer.destination,
                price: offer.price,
                count: 1
            });
        }
        //console.table(this.items);
        //console.log(this.calculateTotalPrice());
    }

    /**
     * Calculates shopping cart total price
     */
    calculateTotalPrice () : number {
        let sum = 0;
        for (let item of this.items) {
            sum += item.price * item.count;
        }
        return sum;
    }

    /**
     * Calculates discount if the value of the purchased items is greater than 200, respective 500 EUR
     */
    calculateDiscount () : number {
        let totalprice = this.calculateTotalPrice();
        if (totalprice > 500) {
            return totalprice * 20 / 100;
        } else if (totalprice > 200) {
            return totalprice * 10 / 100;
        } 
        return 0;
    }

    getItems () : Array <any> {
        return this.items;
    }

    /**
     * Increases the count of existing shopping cart items
     */
    increaseCount(cart : any) : void {
        let item = this.items.find(x => x.id == cart.id);
        if (item) {
            item.count++;
        }
    }

    /**
     * Decreases the count of existing shopping cart items
     */
    decreaseCount(cart : any) : void {
        let item = this.items.find(x => x.id == cart.id);
        if (item) {
            if (item.count > 0) {
                item.count--;
            }
        }
    }

    clearCart() : void {
        this.items= [];
    }
}



