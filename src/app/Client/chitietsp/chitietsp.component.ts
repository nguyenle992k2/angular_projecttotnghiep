import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/service/Nguoidung/sanpham.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})
export class ChitietspComponent implements OnInit, AfterViewInit{
  id: number = 0;
  constructor(private _route: ActivatedRoute, private ctsp: SanphamService){}
  chitietsp:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.id=this._route.snapshot.params['id'];
      this.ctsp.getbyID(this.id).subscribe(res =>{
        this.chitietsp=res;
      })
  } 
}