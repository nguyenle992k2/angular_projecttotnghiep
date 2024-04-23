import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaikhoankhService } from 'src/app/service/Admin/taikhoankh.service';

@Component({
  selector: 'app-taikhoankh',
  templateUrl: './taikhoankh.component.html',
  styleUrls: ['./taikhoankh.component.css']
})
export class TaikhoankhComponent implements OnInit, AfterViewInit{
  constructor(private tkkh: TaikhoankhService){}
  taikhoankh:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.tkkh.getList().subscribe(res =>{
        this.taikhoankh=res;
      })
  }
}
