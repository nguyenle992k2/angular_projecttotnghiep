import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaikhoannvService } from 'src/app/service/Admin/taikhoannv.service';

@Component({
  selector: 'app-taikhoannv',
  templateUrl: './taikhoannv.component.html',
  styleUrls: ['./taikhoannv.component.css']
})
export class TaikhoannvComponent implements OnInit, AfterViewInit{
  constructor(private tknv: TaikhoannvService){}
  taikhoannv:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.tknv.getList().subscribe(res =>{
        this.taikhoannv=res;
      })
  }
}
