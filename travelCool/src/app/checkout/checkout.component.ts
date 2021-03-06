import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    cartItems : Array <any> = [];
    totalPrice: number = 0;
    discount: number = 0;
    checkoutForm : any;

    constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
        this.checkoutForm = this.formBuilder.group({
            name:'',
            address: '',
            bankAccount: ''
        });
    }

    /**
     * Loads cart items and calculates total price and discounts
     */
    ngOnInit(): void {
        this.cartItems = this.cartService.getItems();
        this.totalPrice = this.cartService.calculateTotalPrice();
        this.discount = this.cartService.calculateDiscount();
    }

    /**
     * Increases unit number for the current cart items
     * @param cart: current cart item
     */
    increaseCount(cart : any) : void {
        this.cartService.increaseCount(cart);
        this.totalPrice = this.cartService.calculateTotalPrice();
        this.discount = this.cartService.calculateDiscount();
    }

    /**
     * Decreases unit number for the current cart items
     * @param cart: current cart item
     */
    decreaseCount(cart : any) : void {
        this.cartService.decreaseCount(cart);
        this.totalPrice = this.cartService.calculateTotalPrice();
        this.discount = this.cartService.calculateDiscount();
    }

    /**
     * Completes the purchase and empties the shopping cart
     * @param customerData : form data
     */
    onSubmit(customerData : any) {
        console.warn('Your order has been submitted', customerData);
        this.cartService.clearCart();
        this.cartItems = this.cartService.getItems();
        this.totalPrice = this.cartService.calculateTotalPrice();
        this.discount = this.cartService.calculateDiscount();
        this.checkoutForm.reset();
    }
}
