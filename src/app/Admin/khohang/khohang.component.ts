import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KhachhangService } from 'src/app/service/Admin/khachhang.service';
import { KhohangService } from 'src/app/service/Admin/khohang.service';

@Component({
  selector: 'app-khohang',
  templateUrl: './khohang.component.html',
  styleUrls: ['./khohang.component.css']
})
export class KhohangComponent implements OnInit, AfterViewInit{
  constructor(private kho: KhohangService){}
  khohang:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.kho.getList().subscribe(res =>{
        this.khohang=res;
      })
  }
}
