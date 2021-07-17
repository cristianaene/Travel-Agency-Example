import { findLast } from '@angular/compiler/src/directive_resolver';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Array <any>= [];
 
  constructor() { }

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

  calculateTotalPrice () : number {
    let sum = 0;
    for (let item of this.items) {
      sum += item.price * item.count;
    }
    return sum;
  }

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

  increaseCount(cart : any) : void {
    let item = this.items.find(x => x.id == cart.id);
    if (item) {
      item.count++;
    }
  }

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



