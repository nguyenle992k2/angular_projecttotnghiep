import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/service/Nguoidung/sanpham.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sptheoloai',
  templateUrl: './sptheoloai.component.html',
  styleUrls: ['./sptheoloai.component.css']
})
export class SptheoloaiComponent implements OnInit, AfterViewInit{
  id: number = 0;
  constructor(private _route: ActivatedRoute, private ctsp: SanphamService){}
  sptloai:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  ngOnInit(){
      this.id=this._route.snapshot.params['id'];
      this.ctsp.sptheoloai(this.id).subscribe(res =>{
        this.sptloai=res;
      }) 
  } 
}
