import { Injectable } from '@angular/core';
import { ICart } from '../Model/icart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ICart[] = [];

  getCartItems(): ICart[] {
    return this.cartItems;
  }

  addToCart(product: ICart): void {
    const existingProduct = this.cartItems.find((p) => p.MaSP === product.MaSP);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const newProduct = { ...product, quantity: 1 };
      this.cartItems.push(newProduct);
    }

    this.saveCartToLocalStorage();
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCartFromLocalStorage(): void {
    const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
  }
    
  }
