import {  AfterViewInit, Component, OnInit  } from '@angular/core';
import { KhachhangService } from 'src/app/service/Admin/khachhang.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent implements OnInit, AfterViewInit{
  constructor(private kh: KhachhangService){}
  khachhang:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  getDs(){
    this.kh.getList().subscribe(res =>{
      this.khachhang=res;
    }) 
  }
  ngOnInit(){
      this.getDs();
  }
  onDelete(id: number){
    this.kh.Delete(id).subscribe(res =>{
      this.getDs();
    })
  }
}
