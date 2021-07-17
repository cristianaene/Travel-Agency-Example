import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems : Array <any> = [];
  totalPrice: number = 0;
  discount: number = 0;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.calculateTotalPrice();
    this.discount = this.cartService.calculateDiscount();
  }
  increaseCount(cart : any) : void {
    this.cartService.increaseCount(cart);
    this.totalPrice = this.cartService.calculateTotalPrice();
    this.discount = this.cartService.calculateDiscount();
  }
  decreaseCount(cart : any) : void {
    this.cartService.decreaseCount(cart);
    this.totalPrice = this.cartService.calculateTotalPrice();
    this.discount = this.cartService.calculateDiscount();
  }
}