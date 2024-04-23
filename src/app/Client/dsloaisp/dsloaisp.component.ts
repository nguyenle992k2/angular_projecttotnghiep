import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DsloaispService } from 'src/app/service/Nguoidung/dsloaisp.service';

@Component({
  selector: 'app-dsloaisp',
  templateUrl: './dsloaisp.component.html',
  styleUrls: ['./dsloaisp.component.css']
})
export class DsloaispComponent implements OnInit, AfterViewInit{
  constructor(private dslsp: DsloaispService){}
  dsloai:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.dslsp.getList().subscribe(res =>{
        this.dsloai=res; 
      })
  }
}
