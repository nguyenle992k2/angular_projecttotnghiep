import { Component } from '@angular/core';
import { SanphamService } from 'src/app/service/Nguoidung/sanpham.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  carts:any=[];
  constructor( private home: SanphamService,) {
    //this.cartItems = this.cartService.getCartItems();
    this.carts=this.home.getCart();
  }
  subtotal(cart: any){
    return cart.quantity * cart.Dongia;
  }
}
