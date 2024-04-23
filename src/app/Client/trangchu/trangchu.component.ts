import { Component } from '@angular/core';
import { SanphamService } from 'src/app/service/Nguoidung/sanpham.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent{
  constructor(
    private home: SanphamService,
    private cartService: CartService
    ){}
  trangchu:any=this.home.getCart();
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.home.getspyeuthich().subscribe(res =>{
        this.trangchu=res; 
      })
      
  }
  carts:any[] = this.home.getCart() ;
  onAddCart(productData: any){
    
    let idx = this.carts.findIndex((item :any) => {
      return item.id == productData.id
    }); 
    if (idx >=0 ) {
      this.carts[idx].quantity +=1
    }else{
      let cartItem: any = {
        id: productData.id,
        //anh: productData.Anh,
        ten: productData.TenSP,
        gia: productData.Dongia,
        quantity:1,
        
        subtotal: function() {
          return this.Dongia * this.quantity;
        }
      }
  
      this.carts.push(cartItem);
    }
    console.log(this.carts);

    let cartJson = JSON.stringify(this.carts);
    sessionStorage.setItem('cart', cartJson);
    
    console.log(cartJson);

    //console.log(this.carts[0].subtotal()); // nếu tính đc giá tiền thì chạy đoạn này
  }
}