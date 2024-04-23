import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/service/Nguoidung/sanpham.service';

@Component({
  selector: 'app-sanpham-client',
  templateUrl: './sanpham-client.component.html',
  styleUrls: ['./sanpham-client.component.css']
})
export class SanphamClientComponent implements OnInit, AfterViewInit{
  constructor(private sp: SanphamService){}
  sanpham:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.sp.getList().subscribe(res =>{
        this.sanpham=res;
      })
  }
}
